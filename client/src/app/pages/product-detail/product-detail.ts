import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. เพิ่ม ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cdr: ChangeDetectorRef, // 2. ฉีดตัว ChangeDetectorRef เข้ามา
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id: string) {
    this.apiService.getProductById(id).subscribe({
      next: (data) => {
        console.log('✅ ข้อมูลสินค้ามาแล้ว:', data);

        this.product = data; // รับข้อมูลใส่ตัวแปร

        // 3. สั่งให้ Angular วาดหน้าจอใหม่ทันที!
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('❌ โหลดสินค้าไม่สำเร็จ:', err);
      }
    });
  }
  onDelete() {
    if (confirm('คุณแน่ใจไหมว่าจะลบสินค้านี้?')) { // ถามเพื่อความชัวร์
      this.apiService.deleteProduct(this.product._id).subscribe(() => {
        alert('ลบเรียบร้อย!');
        this.router.navigate(['/']); // ลบเสร็จแล้วดีดกลับหน้าแรก
      });
    }
  }

}