const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json()); 
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URL)
.then(console.log("mongo connected"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'Images')
    }, filename:(req,file,cb) => {
        cb(null, "hello.jpg");
    }
})

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req,res) => {
    res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () =>{
    console.log("Server running");
})