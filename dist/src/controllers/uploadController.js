"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadDefaultService_1 = __importDefault(require("../service/uploadDefaultService"));
const uploadDir = "C:\\tmp\\myc\\upload";
const uploadDefaultService = new uploadDefaultService_1.default(true, uploadDir);
class uploadController {
    constructor() { }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // if(err) {
            //     console.log(11111);
            //     new Error(err);
            //     return res.json({status: 'success', 'descryption': err});
            // }
            console.log(JSON.stringify(req.headers));
            // let result: Object
            // try {
            //     const formObj: Object = ;
            //     result = { formObj.parse}
            // } catch(err: any) {
            //     result = {status: 'fail',
            //              'descryption': err}; 
            // }
            res.json(yield uploadDefaultService.uploadFile(req));
            // console.log(`22 ${result}`);
            // res.json({
            //     status: 'success', 
            //     filePath: res.req.file.path, 
            //     fileName: res.req.file.filename
            //             });
            // try {
            //     const client = await pool.connect();
            //     const sql = indexSql.test();
            //     const {
            //         rows
            //     } = await client.query(sql);
            //     const todos = rows;
            //     client.release();
            //     res.send(todos);
            // } catch (error) {
            //     console.log(error);
            //     res.status(400).send(error);
            // }
        });
    }
}
exports.default = uploadController;
//# sourceMappingURL=uploadController.js.map