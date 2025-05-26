import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { ShopFooterComponent } from "../../../components/footer/shop-footer/shop-footer.component";

@Component({
  selector: 'app-shop-checkout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShopFooterComponent
],
  templateUrl: './shop-checkout.component.html',
  styleUrl: './shop-checkout.component.scss'
})
export class ShopCheckoutComponent {

}
