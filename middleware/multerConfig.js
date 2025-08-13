import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/");        
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes  = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if(extname && mimetype){
        cb(null, true);
    }else{
        cb(new Error("Only images and PDF files are allowed"));
    }
};

export const upload = multer({ storage, fileFilter });
export const multiUpload = multer({ storage, fileFilter });
