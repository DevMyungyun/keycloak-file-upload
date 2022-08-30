"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
const logger_1 = __importDefault(require("./middleware/logger"));
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
        this.app = express_1.default();
        this.config();
        this.middleware;
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: '1mb' })); // 100kb default
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
    }
    middleware() {
        this.app.use(logger_1.default);
    }
    assets() {
        this.app.use(express_1.default.static('public'));
        this.app.use(express_1.default.static('views'));
    }
    template() {
        this.app.set('view engine', 'ejs');
    }
}
exports.default = Server;
