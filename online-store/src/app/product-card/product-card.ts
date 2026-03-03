import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  selectedIndex = 0;

  get mainImage(): string {
    return this.product.images[this.selectedIndex] ?? this.product.image;
  }

  selectImage(i: number): void {
    if (i < 0 || i >= this.product.images.length) return;
    this.selectedIndex = i;
  }

  get fullStars(): number {
    return Math.floor(this.product.rating);
  }

  get hasHalfStar(): boolean {
    return this.product.rating - Math.floor(this.product.rating) >= 0.5;
  }

  get emptyStars(): number {
    const used = this.fullStars + (this.hasHalfStar ? 1 : 0);
    return Math.max(0, 5 - used);
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}