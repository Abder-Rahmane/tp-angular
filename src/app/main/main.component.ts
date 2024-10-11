import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  currentImageIndex: number = 0;
  notification: string | null = null;

  constructor() {
    this.initializeProducts();
  }

  initializeProducts(): void {
    const productNames = [
      'robe_1', 'robe_2', 'robe_3', 'robe_4', 'robe_5',
      'robe_6', 'robe_7', 'robe_8', 'robe_9', 'robe_10', 
      'robe_11', 'robe_12'
    ];

    this.products = productNames.map(name => ({
      name: name.replace('_', ' '),
      price: this.getRandomPrice(20, 120),
      images: this.getImagesForProduct(name)
    }));
  }

  getImagesForProduct(productName: string): string[] {
    const imagePaths: string[] = [];
    const numImages = 7;

    for (let i = 1; i <= numImages; i++) {
      imagePaths.push(`assets/images/products/${productName}/${i}.webp`);
    }

    return imagePaths;
  }

  getRandomPrice(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  showModal(product: Product): void {
    this.selectedProduct = product;
    this.currentImageIndex = 0;
  }

  hideModal(): void {
    this.selectedProduct = null;
  }

  nextImage(): void {
    if (this.selectedProduct) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProduct.images.length;
    }
  }

  previousImage(): void {
    if (this.selectedProduct) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length;
    }
  }

  deleteProduct(): void {
    if (this.selectedProduct) {
      this.products = this.products.filter(product => product !== this.selectedProduct);
      this.notification = `${this.selectedProduct.name} a été supprimé.`; 
      this.hideModal();

      setTimeout(() => {
        this.notification = null;
      }, 3000);
    }
  }
}
