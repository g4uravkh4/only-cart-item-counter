import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent {
  cartItemsCount = 0;

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.cartService.cartItemsCount$.subscribe((count) => {
      this.cartItemsCount = count;
    });
  }
}
