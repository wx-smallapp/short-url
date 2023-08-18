type ServerResponse = {
    status: number,
    data: object,
    message: string
}

/**
 * 创建一个服务器返回体
 * @param status 
 * @param data 
 * @param message 
 * @returns 
 */
export function createResponse(status: number, data: object, message: string): ServerResponse {
    return {
        status: status, // 0 表示处理错误 1 表示处理正常
        data: data,
        message: message
    }
}