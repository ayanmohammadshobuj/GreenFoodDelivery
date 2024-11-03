
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/carts.service';
import { ProductService } from '../../../services/products.service';
import { Products } from '../../../models/products';
import { Carts } from '../../../models/carts';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css'
})
export class CustomerCartComponent {

  products: Products[] = [];
  selectedItem: Products | null = null;
  userId = 1; // Assuming a static user ID for now

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response: Products[]) => {
      this.products = response;
    });
  }

  // Method to set the selected item for the modal
  selectItem(item: Products): void {
    this.selectedItem = item;
  }

    }
  

