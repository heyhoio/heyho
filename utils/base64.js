export const encode = (input) => Buffer.from(input).toString('base64')
export const decode = (input) => Buffer.from(input, 'base64').toString('utf-8')
