import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { Products } from '../../../models/products';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../services/categories.service';
import { Categories } from '../../../models/categories';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  categories: Categories[] = [];
  categoryList: Categories = {
    categoryId: 0,
    categoryName: '',
    categoryThumbnail: ''
  };

  products: Products[] = [];
  userList: Products = {
    productId: 0,
    title: '',
    description: '',
    categoryId: 0,
    price: 0,
    discountPercentage: 0,
    stock: 0,
    tags: [],
    availabilityStatus: '',
    thumbnail: ''
  };
  constructor(private http: HttpClient, private productService: ProductService, private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: Products[]) => {
      this.products = response;
      console.log(this.products);
    });

    this.categoryService.getCategories().subscribe((response: Categories[]) => {
      this.categories = response;
      console.log(this.categories);
    });
  }

  // productsData() {
  //   this.productService.getProducts().subscribe((response: Products[]) => {
  //     this.products = response;
  //     console.log(this.products);
  //   })
  // }

  // categoriesData() {
  //   this.categoryService.getCategories().subscribe((response: Categories[]) => {
  //     this.categories = response;
  //     console.log(this.categories);
  //   })
  // }
}
