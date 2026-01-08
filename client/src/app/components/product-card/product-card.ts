import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterModule} from '@angular/router'

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,  RouterModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard { // ชื่อคลาสยังคงมีคำว่า Component ได้ (เพื่อความชัดเจน) หรือถ้าในไฟล์คุณชื่อ ProductCard เฉยๆ ให้แก้ตรงนี้ตามครับ
  @Input() product: any;
}