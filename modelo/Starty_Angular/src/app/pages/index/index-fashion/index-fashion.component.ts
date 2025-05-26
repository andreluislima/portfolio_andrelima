import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import ShopData from '../../../data/shop.json'

import * as feather from 'feather-icons'
import { tns } from 'tiny-slider';
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { ShopFooterComponent } from "../../../components/footer/shop-footer/shop-footer.component";

interface ShopData{
  id: number;
  tag: string;
  image1: string;
  image2: string;
  name: string;
  price: string;
  rate: string[];
}

@Component({
  selector: 'app-index-fashion',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogOneComponent,
    ShopFooterComponent
],
  templateUrl: './index-fashion.component.html',
  styleUrl: './index-fashion.component.scss'
})
export class IndexFashionComponent {
  product = ShopData.slice(0,8);
  popularProduct = ShopData.slice(8,15)

  ngAfterViewInit(): void {
    feather.replace()

    tns({
      container: '.tiny-four-item',
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      speed: 400,
      gutter: 12,
      responsive: {
          992: {
              items: 4
          },

          767: {
              items: 2
          },

          320: {
              items: 1
          },
      },
  });
  }

  offerData = [
    {
      image:'assets/images/shop/items/f1.png',
      title1:'Mid Season Sale',
      title2:'Up To 50% Off',
      bg:'bg-soft-secondary'
    },
    {
      image:'assets/images/shop/items/bag.png',
      title1:'Summer Sale',
      title2:'Up To 30% Off',
      bg:'bg-soft-info'
    },
  ]
}
