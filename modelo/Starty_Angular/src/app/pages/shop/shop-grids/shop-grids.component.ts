import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import ShopData from '../../../data/shop.json'
import * as feather from 'feather-icons'
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

interface TopProduct{
    image: string;
    name: string;
    descRate: string;
    rate: string;
}

@Component({
  selector: 'app-shop-grids',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ShopFooterComponent
],
  templateUrl: './shop-grids.component.html',
  styleUrl: './shop-grids.component.scss'
})
export class ShopGridsComponent {

  product:ShopData[] = ShopData.slice(0,8);

   ngAfterViewInit(): void {
    feather.replace()
   }

   categories:string[] = [
    'Men','Women','Electronics','Jewellery','Shoes','Kid’s Wear','Sports','Toys'
   ]

   color:string[] = [
    'btn-primary','btn-danger','btn-success','btn-info','btn-secondary','btn-warning'
   ]

   topProduct:TopProduct[] = [
    {
      image:'assets/images/shop/items/f1.png',
      name:'T-Shirt',
      descRate:'$18.00',
      rate:'$22.00'
    },
    {
      image:'assets/images/shop/items/f3.png',
      name:'Watch',
      descRate:'$18.00',
      rate:'$22.00'
    },
    {
      image:'assets/images/shop/items/f6.png',
      name:'Coffee Cup',
      descRate:'$18.00',
      rate:'$22.00'
    },
   ]
}
