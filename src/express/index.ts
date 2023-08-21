const express = require('express')
const cors = require('cors')
const app = express()
const appServerConfig = require("../../config")

const bodyParser = require('body-parser');//用于req.body获取值的
const port = appServerConfig.expressListenPort

import { DataSource } from "typeorm";
import { originUrlConvertShortUrl } from "./utils"
import { createResponse } from "./model";
import { Response } from "express";

export default function setup(AppDataSource: DataSource, Shorturl) {
    app.use(cors())

    app.use(bodyParser.json());
    // 创建 application/x-www-form-urlencoded 编码解析
    app.use(bodyParser.urlencoded({ extended: false }));

    /**
     * 生成短地址
     * 1. 传进来originUrl先看看在数据库是否存在，存在直接返回shortCode
     * 2. 不存在生成一个code
     * 3. code放入数据库中查询是否有重复，重复就再生成一次，没有重复的插入数据库
     * 4. 返回拼接url
     */

    const shortBaseUrl = appServerConfig.frontendAccessBaseUrl // 前端访问的url前缀

    app.post("/gen", async (req, res) => {

        console.log(req.body.originUrl)
        let originUrl = req.body.originUrl;

        let originUrlResult: shortUrlDB = await AppDataSource.manager.findOne(Shorturl, { where: { origin_url: originUrl } }) as shortUrlDB
        type shortUrlDB = {
            origin_url: string
            random_code: string
            shortUrl?: string
        }
        let result: shortUrlDB = {
            origin_url: "",
            random_code: ""
        }

        if (!originUrlResult) {
            console.log("不存在需要生成随机code")
            // 不存在需要生成随机code
            let str = originUrlConvertShortUrl()

            let randomCodeResult = await AppDataSource.manager.findOne(Shorturl, { where: { random_code: str } })


            while (randomCodeResult) {
                console.log("生成的随机码重复了，需要重新生成")

                // 生成的随机码重复了，需要重新生成
                str = originUrlConvertShortUrl()
                randomCodeResult = await AppDataSource.manager.findOne(Shorturl, { where: { random_code: str } })
            }

            // 随机code在库中不存在，保存这条记录
            await AppDataSource.manager.save(Shorturl, { origin_url: originUrl, random_code: str })

            result = { origin_url: originUrl, random_code: str, shortUrl: `${shortBaseUrl}/${str}` }
        } else {
            // 存在直接返回随机code
            console.log("存在直接返回随机code", originUrlResult)

            result = Object.assign(originUrlResult, { shortUrl: `${shortBaseUrl}/${originUrlResult.random_code}` })
        }
        console.log(result)
        res.status(200).send(createResponse(1, result, "ok"))
    })

    /**
     * 将短地址链接301重定向到原地址
     * 拆分短地址，用随机code查询数据库，301跳转
     */
    app.get("/backend/*", async (req, res: Response) => {
        type shortUrlDB = {
            origin_url: string
            random_code: string
            shortUrl?: string
        }
        console.log("on /backend")
        console.log(req.url)
        // req.url.slice(-7)

        console.log(req.url.slice(-7))
        let result: shortUrlDB = await AppDataSource.manager.findOne(Shorturl, { where: { random_code: req.url.slice(-7) } }) as shortUrlDB
        console.log(result)
        // res.redirect(301, result.origin_url)
        // res.location(result.origin_url)
        if (result) {
            res.status(200).send(createResponse(1, { originUrl: result.origin_url }, "ok"))
        } else {
            res.status(401).send(createResponse(0, {}, "无效的短链接"))
        }

    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}