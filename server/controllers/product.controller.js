const Product = require('../models/product.model');

exports.findAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// เพิ่มฟังก์ชันดึงสินค้าชิ้นเดียว (ตาม ID)
exports.findOne = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id); // ค้นหาด้วย ID
      if (!product) {
        return res.status(404).send({ message: "ไม่พบสินค้านี้" });
      }
      res.json(product); // ส่งข้อมูลกลับไปหน้าบ้าน
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

exports.create = async (req, res) => {
  try {
    // สร้าง Object ข้อมูลสินค้า
    const productData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file ? req.file.filename : null // ถ้ามีไฟล์ ให้เก็บชื่อไฟล์
    };

    const newProduct = new Product(productData);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id); // คำสั่งลบใน Database
    res.send({ message: "ลบสินค้าเรียบร้อยแล้ว!" });
  } catch (error) {
    res.status(500).send({ message: "ลบไม่สำเร็จ: " + error.message });
  }
};