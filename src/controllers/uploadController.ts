import { Request, Response, NextFunction } from 'express';

import UploadDefaultService from "../service/uploadDefaultService";

const uploadDir: String= "C:\\tmp\\myc\\upload";

const uploadDefaultService = new UploadDefaultService(true, uploadDir);

class uploadController {

    constructor() {}

    public async post(req: Request, res: Response) {
        
        // console.log(JSON.stringify(req.headers));
        const result: any = await uploadDefaultService.uploadFile(req);
        
        res.json(Object.keys(result.fields).length === 0 &&
                Object.keys(result.files).length === 0 ? 
                {"status": "fail", 
                'descryption': 'this file type is not available'} :
                result);
    }

    
}

export default uploadController;