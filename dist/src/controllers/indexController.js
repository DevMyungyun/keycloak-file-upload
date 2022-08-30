"use strict";
// import pool from '../dbconfig/dbconnector';
// import indexSql from '../sql/indexSql';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class indexController {
    constructor() { }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send({ "status": "OK", "descryption": "Health Check Success." });
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
exports.default = indexController;
//# sourceMappingURL=indexController.js.map