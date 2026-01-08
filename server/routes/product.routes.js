const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const multer = require('multer');

// ตั้งค่าที่เก็บไฟล์
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // เก็บในโฟลเดอร์ uploads
  },
  filename: function (req, file, cb) {
    // ตั้งชื่อไฟล์: เวลาปัจจุบัน + นามสกุลไฟล์เดิม
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// เพิ่ม middleware 'upload.single' เข้าไปใน Route POST
router.get('/', productController.findAll);
router.get('/:id', productController.findOne); // เพิ่ม Route ดูรายตัว
router.post('/', upload.single('image'), productController.create);
router.delete('/:id', productController.delete);

module.exports = router;