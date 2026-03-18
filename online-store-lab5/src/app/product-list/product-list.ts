import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() deleteProductId = new EventEmitter<number>();

  localProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.localProducts = [...this.products];
    }
  }

  handleDelete(productId: number) {
    this.localProducts = this.localProducts.filter(p => p.id !== productId);
    this.deleteProductId.emit(productId);
  }
}