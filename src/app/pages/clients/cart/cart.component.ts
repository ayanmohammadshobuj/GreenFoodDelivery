import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/carts.service'; 
import { Carts } from '../../../models/carts'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  carts: Carts[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCarts();
  }

  loadCarts(): void {
    this.cartService.getCarts().subscribe(carts => {
      this.carts = carts;
      this.calculateTotal();
    });
  }

  removeCart(cartId: number): void {
    this.cartService.deleteCart(cartId).subscribe(() => {
      this.loadCarts();
    });
  }

  checkout(): void {
    // Implement your checkout logic here
    console.log("Proceeding to checkout");
  }

  private calculateTotal(): void {
    this.totalAmount = this.carts.reduce((sum, cart) => sum + cart.total, 0);
  }

  trackByCartId(index: number, cart: Carts): number {
    return cart.cartId;
  }

  trackByProductId(index: number, product: { productId: number; quantity: number }): number {
    return product.productId;
  }
}
