"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, resp, next) => {
    console.log((new Date).toString(), 'Request Accepted:', req.method, req.path);
    next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map