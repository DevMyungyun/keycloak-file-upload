"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
const fileDirectory_1 = __importDefault(require("./helper/fileDirectory"));
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
const uploadRouter_1 = __importDefault(require("./routers/uploadRouter"));
const logger_1 = __importDefault(require("./middleware/logger"));
// import path from 'path';
const uploadfileDirectory = "C:\\tmp\\myc\\upload";
// console.log(`${process.env}`);
// console.log(`${process.env.SERVER_PORT}`);
class Server {
    constructor() {
        // private assets() {
        //     this.app.use(express.static('public'));
        //     this.app.use(express.static('views'));
        // }
        // private template() {
        //     this.app.set('view engine', 'ejs');
        // }
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
        this.app = express_1.default();
        this.middleware();
        this.config();
        this.routerConfig();
        this.fileDirectoryCheck();
        // this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ limit: '100mb',
            parameterLimit: 100000,
            extended: false }));
        this.app.use(body_parser_1.default.json({ limit: '100mb' })); // Request Size Setting
    }
    fileDirectoryCheck() {
        fileDirectory_1.default(uploadfileDirectory);
    }
    dbConnect() {
        dbconnector_1.default.connect(function (err, client, done) {
            if (err)
                throw new Error(err);
            console.log('DB Connected');
        });
    }
    routerConfig() {
        this.app.use('/', indexRouter_1.default);
        this.app.use('/upload', uploadRouter_1.default);
    }
    middleware() {
        this.app.use(logger_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map