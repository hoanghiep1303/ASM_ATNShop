const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        trim: true,
    },
    Information: {
        type: String,
        required: true,
        trim: true,
    },
    Price: {
        type: String,
        required: true,
        min: 0,
    },
    Madein: {
        type: String,
        required: true,
        trim: true,
    },
    ImgLink: {
        type: String,
        trim: true,
    },
});

const Products = mongoose.model("Products", ProductSchema, "Products");

///
module.exports = Products;