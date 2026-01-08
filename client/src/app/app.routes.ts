import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AddProduct } from './pages/add-product/add-product'; // เช็คชื่อไฟล์ดีๆนะครับ
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  // 1. ถ้าเข้ามาแบบเปล่าๆ ให้ดีดไปที่ /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2. ย้ายหน้าแรกไปไว้ที่ path: 'home'
  { path: 'home', component: Home },
  { path: 'add', component: AddProduct },
  { path: 'product/:id', component: ProductDetail } // :id คือตัวแปร
];