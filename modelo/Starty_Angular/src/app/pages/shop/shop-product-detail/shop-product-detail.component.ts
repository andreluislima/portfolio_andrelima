import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import ShopData from '../../../data/shop.json'
import { tns } from 'tiny-slider';

import * as feather from 'feather-icons'
import { ShopFooterComponent } from "../../../components/footer/shop-footer/shop-footer.component";

interface product{
  id: number;
  tag: string;
  image1: string;
  image2: string;
  name: string;
  price: string;
  rate: string[];
}

@Component({
  selector: 'app-shop-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShopFooterComponent
],
  templateUrl: './shop-product-detail.component.html',
  styleUrl: './shop-product-detail.component.scss'
})
export class ShopProductDetailComponent {
  shopData:product[] = ShopData

  relatedProduct:product[] = ShopData.slice(8,14)

  id:any
  data:any

  constructor(private Routre:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Routre.snapshot.params['id']
    this.data = this.shopData.find((item) => item.id === parseInt(this.id))
  }

  ngAfterViewInit(): void {
    tns({
      container: '.tiny-single-item',
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
  });

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
feather.replace()
  }

  rate:string[] = [
    'mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star'
  ]

  overview:string[] = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
  ]

  size:string[] = [
    'S','M','L','XL'
  ]

}
