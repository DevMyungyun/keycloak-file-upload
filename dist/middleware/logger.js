"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, resp, next) => {
    console.log(Date.now(), 'Request logged:', req.method, req.path);
    next();
};
exports.default = loggerMiddleware;
