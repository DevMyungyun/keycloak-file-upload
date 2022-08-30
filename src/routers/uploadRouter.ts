import express, { Router } from 'express';
import UploadController from '../controllers/uploadController';

const router = Router();
const uploadController = new UploadController(); 

router.post('/default', uploadController.post);

export default router;