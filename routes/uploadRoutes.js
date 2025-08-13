import express from 'express';
import { uploadMultiple, uploadSingle } from '../controllers/uploadController.js';
import { multiUpload, upload } from '../middleware/multerConfig.js';

const router = express.Router();

router.post("/upload", upload.single("file"), uploadSingle);
router.post("/uploads", multiUpload.array("files"), uploadMultiple);

export default router;