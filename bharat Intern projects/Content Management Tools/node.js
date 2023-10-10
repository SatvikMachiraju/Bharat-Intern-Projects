

// Updated Node.js (index.js)
const express = require("express");
const multer = require("multer"); // Middleware for handling file uploads
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

// Configure file upload using multer
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
    res.send({ message: "File uploaded successfully" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
