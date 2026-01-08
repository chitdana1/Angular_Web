// 1. ส่วนประกาศตัวแปร (ต้องอยู่บนสุดเสมอ!)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = 3000;

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. เปิดช่องให้ดึงรูปภาพ (ต้องมี 'path' จากข้างบนก่อน ถึงจะทำงานได้)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 4. เชื่อมต่อ Database
mongoose.connect('mongodb://127.0.0.1:27017/my_database')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// 5. เรียกใช้ Routes
app.use('/api/products', productRoutes);


// 6. Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});