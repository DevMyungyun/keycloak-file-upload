import UploadAbstractClass from '../service/uploadAbstractClass';

import { Request } from 'express';
const { formidable } = require('formidable');

class uploadDefaultService extends UploadAbstractClass {

    private multiples: boolean;
    private uploadDir: String;

    constructor(
        multiples: boolean,
        uploadDir: String
    ) {
        super();
        this.multiples = multiples;
        this.uploadDir = uploadDir;
    }

    private optionsObj: any = {
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

    filter(): Function {
        return ({name, originalFilename, mimetype}) => {
                // keep only images
                return mimetype && mimetype.includes("image");
        }
    }

    options(): void {
        this.optionsObj.uploadDir = this.uploadDir;
        this.optionsObj.multiples = this.multiples;
        this.optionsObj.filter = this.filter();
    }
    
    public async uploadFile (req: Request): Promise<Object> {
        this.options();
        const form = formidable(this.optionsObj);
        return new Promise((resolve, rejects) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    rejects({ 'status': 'fail',
                            'descryption': err }); 
                }
                resolve({ status: 'success',
                            fields,
                            files });
            });
        })
    }
    
}

export default uploadDefaultService;