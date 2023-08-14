import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css'],
})
export class TrackbyComponent {
  products: Product[] = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 24.99 },
  ];

  /*  By using trackBy, we instruct Angular to track each product based on
  its id. When the list changes due to filtering, sorting, or updates to
  the products, Angular will efficiently update the DOM based on the changes
  to the products' id. This avoids unnecessary re-rendering of all
  products and improves the application's rendering performance. */

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
