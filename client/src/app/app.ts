import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api';
// 1. เพิ่มบรรทัดนี้ครับ (สำคัญมาก!) ⭐
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. นำ RouterOutlet และ RouterLink มาใส่ใน imports นี้ด้วย ⭐
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App  {

}