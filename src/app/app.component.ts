import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/clients/navbar/navbar.component';
import { HomeComponent } from './pages/clients/home/home.component';
import { FooterComponent } from './pages/clients/footer/footer.component';
import { CartComponent } from './pages/clients/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GreenFoodDelivery';
}
