import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next) => {
    console.log((new Date).toString(),'Request Accepted:', req.method, req.path)
    next()
}

export default loggerMiddleware