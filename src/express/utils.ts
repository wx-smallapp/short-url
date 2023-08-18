// 用户输入短网址
// nodejs程序拿到短网址查询数据库返回长网址
// 301重定向

export function originUrlConvertShortUrl() {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let max = str.length - 1; // 生成随机数的最大值
  let min = 0; // 生成随机数的最小值
  let len = 7; // 生成随机字符串的长度
  let randomStr = ""
  for (let i = 0; i < len; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    randomStr += str.charAt(randomNumber)
  }
  return randomStr
}