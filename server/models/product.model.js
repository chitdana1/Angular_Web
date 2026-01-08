// server/models/product.model.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String, // เพิ่มคำอธิบาย
    price: Number,
    image: String        // เพิ่มชื่อไฟล์รูปภาพ
});

// export ออกไปให้ไฟล์อื่นใช้ได้
module.exports = mongoose.model('Product', ProductSchema);