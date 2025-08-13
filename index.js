import express from "express";
import uploadRoutes from './routes/uploadRoutes.js';
import fs from 'fs';

const uploadDir = "./uploads";
if(!fs.existsSync(uploadDir)) 
    fs.mkdirSync(uploadDir);



const app = express();
app.use(express.json());

const PORT = 5000;

app.use("/api", uploadRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});