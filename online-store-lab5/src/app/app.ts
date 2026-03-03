import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list';

import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  categories: Category[] = [];
  selectedId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private service: ProductService) {
    this.categories = this.service.getCategories();
  }

  selectCategory(c: Category) {
    this.selectedId = c.id;
    this.selectedProducts = this.service.getProductsByCategory(c.id);
  }

  onDelete(productId: number) {
    this.service.deleteProduct(productId);
    if (this.selectedId !== null) {
      this.selectedProducts = this.service.getProductsByCategory(this.selectedId);
    }
  }
}