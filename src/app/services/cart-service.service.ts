import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}

  private cartItemsCount = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCount.asObservable();

  increaseCartItemsCount() {
    this.cartItemsCount.next(this.cartItemsCount.value + 1);
  }
}
