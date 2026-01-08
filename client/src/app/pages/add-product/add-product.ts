import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html'
})
export class AddProduct {
  name = '';
  description = '';
  price = 0;
  selectedFile: File | null = null; // ตัวแปรเก็บไฟล์

  constructor(private apiService: ApiService, private router: Router) {}

  // เมื่อมีการเลือกไฟล์
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // ต้องแพ็คใส่ FormData เพราะมีไฟล์
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price.toString());
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.apiService.addProduct(formData).subscribe(() => {
      this.router.navigate(['/']); // บันทึกเสร็จเด้งกลับหน้าแรก
    });
  }

}
