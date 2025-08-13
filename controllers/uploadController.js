import path from "path";

export const uploadSingle = async(req, res)=> {
    try {
        if(!req.file)
            return res.status(400).json({
                status : "error",
                message : "No file uploaded",
                statusCode : 400,
            });

            res.status(200).json({
                status : "success",
                message : "File Uploaded Successfully!...",
                file : req.file.filename,
                path : req.file.path,
                statusCode : 200,
            });

    } catch (error) {
        console.error("Upload Error: ", error);
        res.status(500).json({
            status : "error",
            message : "Internal Server Error",
            statusCode : 500,
        });
    }
}

export const uploadMultiple = async (req, res) => {
    try {
        if(!req.files || req.files.length === 0)
            return res.status(400).json({
        status : "error",
        message : "No files Uploaded",
        statusCode : 400
        });

        const uploadedFiles = req.files.map(file => ({
            filename: file.filename,
            path : file.path
        }));

        res.status(200).json({
            status : "success",
            message : "Files uploaded successfully!...",
            files: uploadedFiles,
            statusCode : 200,
        });
        
    } catch (error) {
        console.error("Upload Error: ", error);
        res.status(500).json({
            status : "error",
            message : "Insernal Server Error",
            statusCode : 500,
        });
    }
}