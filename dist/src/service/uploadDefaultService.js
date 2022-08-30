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
const uploadAbstractClass_1 = __importDefault(require("../service/uploadAbstractClass"));
const { formidable } = require('formidable');
class uploadDefaultService extends uploadAbstractClass_1.default {
    constructor(multiples, uploadDir) {
        super();
        this.optionsObj = {
            maxFields: 1000,
            maxFieldsSize: 20 * 1024 * 1024,
            maxFiles: 1024 * 1024 * 1024 * 1024,
            maxFileSize: 200 * 1024 * 1024,
            maxTotalFileSize: undefined,
            minFileSize: 1,
            allowEmptyFiles: false,
            keepExtensions: false,
            encoding: 'utf-8',
            hashAlgorithm: false,
            // uploadDir: this.uploadDir,
            // enabledPlugins: [octetstream, querystring, multipart, json],
            // fileWriteStreamHandler: null,
            defaultInvalidName: 'invalid-upload-file',
            // multiples: this.multiples,
            filename: undefined,
        };
        this.multiples = multiples;
        this.uploadDir = uploadDir;
    }
    filter() {
        return ({ name, originalFilename, mimetype }) => {
            // keep only images
            return mimetype && mimetype.includes("image");
        };
    }
    options() {
        this.optionsObj.uploadDir = this.uploadDir;
        this.optionsObj.multiples = this.multiples;
        this.optionsObj.filter = this.filter;
    }
    uploadFile(req) {
        return __awaiter(this, void 0, void 0, function* () {
            this.options();
            const form = formidable(this.optionsObj);
            return new Promise((resolve, rejects) => {
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log(`Error!! ${err}`);
                        rejects({ 'status': 'fail',
                            'descryption': err });
                    }
                    console.dir(`11 ${fields}, ${files}`);
                    resolve({ status: 'success',
                        fields,
                        files });
                });
            });
        });
    }
}
exports.default = uploadDefaultService;
//# sourceMappingURL=uploadDefaultService.js.map