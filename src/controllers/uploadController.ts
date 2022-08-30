import { Request, Response, NextFunction } from 'express';

import UploadDefaultService from "../service/uploadDefaultService";

const uploadDir: String= "C:\\tmp\\myc\\upload";

const uploadDefaultService = new UploadDefaultService(true, uploadDir);

class uploadController {

    constructor() {}

    public async post(req: Request, res: Response) {
        
        // console.log(JSON.stringify(req.headers));
        
        res.json(await uploadDefaultService.uploadFile(req));
    }

    
}

export default uploadController;