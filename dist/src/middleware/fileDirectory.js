"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const fileDirectoryMiddleware = () => {
    const fileDirectoryPath = `${process.env.FILE_DIRECTORY_PATH}`;
    try {
        if (!fs.existsSync(fileDirectoryPath))
            fs.mkdirSync(fileDirectoryPath);
    }
    catch (error) {
        new Error(`${new Date()} : ${error}`);
    }
};
exports.default = fileDirectoryMiddleware;
//# sourceMappingURL=fileDirectory.js.map