import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html',
  styleUrls: ['./cart-body.component.css'],
})
export class CartBodyComponent {
  constructor(private cartService: CartServiceService) {}
  productName = 'Sample Product';
  addToCart() {
    this.cartService.increaseCartItemsCount();
  }
}
