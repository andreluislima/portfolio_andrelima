import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { ShopFooterComponent } from "../../../components/footer/shop-footer/shop-footer.component";

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShopFooterComponent
],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {
  productData = [
    {
      image:'assets/images/shop/items/f1.png',
      name:'T-Shirt',
      price:255.00,
      total:'510.00',
      value:7
    },
    {
      image:'assets/images/shop/items/f3.png',
      name:'Cap',
      price:520.00,
      total:'$520.00',
      value:1
    },
    {
      image:'assets/images/shop/items/f6.png',
      name:'T-Shirt',
      price:160.00,
      total:'$320.00',
      value:2
    },
  ]
}
