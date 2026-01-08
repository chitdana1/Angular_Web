import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. เพิ่ม ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  products: any[] = [];

  // 2. เพิ่ม private cdr: ChangeDetectorRef ในวงเล็บ constructor
  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe({
      next: (data: any) => {
        console.log('✅ ข้อมูลมาแล้ว (ก่อนอัปเดตจอ):', data);

        // รับค่าข้อมูล
        this.products = data;

        // 3. สั่งให้ Angular วาดหน้าจอใหม่ "เดี๋ยวนี้!"
        this.cdr.detectChanges();

        console.log('✅ สั่งอัปเดตหน้าจอแล้ว');
      },
      error: (err) => {
        console.error('❌ Error:', err);
      }
    });
  }
}