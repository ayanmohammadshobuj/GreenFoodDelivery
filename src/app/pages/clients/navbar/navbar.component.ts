import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  openMenu() {
    this.router.navigate(['menu']);
  }

  openHome() {  
    this.router.navigate(['home']);
  }

  login(){
    this.router.navigate(['login']);
  }

  goToCart(){
    this.router.navigate(['cart']);
  }
}
