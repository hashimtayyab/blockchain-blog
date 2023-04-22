const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    postPic: {
        type:String,
        required: false,
    },
},
    { timestamps :true }
);

module.exports = mongoose.model("Post", postSchema);