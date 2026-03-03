import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteId = new EventEmitter<number>();

  mainImage = '';

  ngOnInit() {
    this.mainImage = this.product.image;
  }

  setMain(img: string) {
    this.mainImage = img;
  }

  like() {
    this.product.likes += 1;
  }

  delete() {
    this.deleteId.emit(this.product.id);
  }

  get whatsappShareUrl(): string {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${text}`;
  }

  get telegramShareUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}