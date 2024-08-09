const express = require('express');
const multer = require('multer');
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const app = express();
const port = 5000;

let uploadedFiles = [];

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = uniqueSuffix + '-' + file.originalname;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

// Basic Authentication
app.use('/admin', basicAuth({
    users: { 'admin': 'password' },
    challenge: true
}));

app.post('/upload-file', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ error: 'Please upload a file' });
    }

    uploadedFiles.push({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        size: file.size,
        mimetype: file.mimetype,
        uploadTime: new Date()
    });

    res.send({
        message: 'File uploaded and metadata saved successfully',
        filePath: file.path
    });
});

app.get('/admin/files', (req, res) => {
    res.send(uploadedFiles);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

