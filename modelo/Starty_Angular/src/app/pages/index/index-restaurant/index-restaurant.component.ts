import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { tns } from 'tiny-slider';
import { LightgalleryModule } from 'lightgallery/angular';
import { RestaurantFooterComponent } from "../../../components/footer/restaurant-footer/restaurant-footer.component";

import * as feather from 'feather-icons'

interface Menu{
  image: string;
  name: string;
  desc: string;
  price: string;
  category: string;
}
interface ServicesData{
  image: string;
  title: string;
  desc: string;
}

interface BlogData {
  image: string;
  category: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-index-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    LightgalleryModule,
    RestaurantFooterComponent
],
  templateUrl: './index-restaurant.component.html',
  styleUrl: './index-restaurant.component.scss'
})
export class IndexRestaurantComponent {
  menu:Menu[] = [
    {
      image:'assets/images/portfolio/rest/01.jpg',
      name:'Cupcake Recipes',
      desc:'A reader will be distracted by the readable',
      price:'$13.79',
      category:'break'
    },
    {
      image:'assets/images/portfolio/rest/02.jpg',
      name:'Onion Pizza',
      desc:'A reader will be distracted by the readable',
      price:'$12.49',
      category:'lunch'
    },
    {
      image:'assets/images/portfolio/rest/03.jpg',
      name:'Chicken Breast',
      desc:'A reader will be distracted by the readable',
      price:'$10.99',
      category:'dinner'
    },
    {
      image:'assets/images/portfolio/rest/04.jpg',
      name:'Veg Pizza',
      desc:'A reader will be distracted by the readable',
      price:'$19.99',
      category:'break'
    },
    {
      image:'assets/images/portfolio/rest/05.jpg',
      name:'Cordon Bleu',
      desc:'A reader will be distracted by the readable',
      price:'$17.79',
      category:'lunch'
    },
    {
      image:'assets/images/portfolio/rest/06.jpg',
      name:'Boerewors',
      desc:'A reader will be distracted by the readable',
      price:'$57.79',
      category:'dinner'
    },
    {
      image:'assets/images/portfolio/rest/07.jpg',
      name:'Tarte Tatin',
      desc:'A reader will be distracted by the readable',
      price:'$47.79',
      category:'tea'
    },
    {
      image:'assets/images/portfolio/rest/08.jpg',
      name:'Green Tea',
      desc:'A reader will be distracted by the readable',
      price:'$49.79',
      category:'break'
    },
    {
      image:'assets/images/portfolio/rest/09.jpg',
      name:'Special Coffee',
      desc:'A reader will be distracted by the readable',
      price:'$59.79',
      category:'lunch'
    },
    {
      image:'assets/images/portfolio/rest/10.jpg',
      name:'Lemon Tea',
      desc:'A reader will be distracted by the readable',
      price:'$17.79',
      category:'tea'
    },
    {
      image:'assets/images/portfolio/rest/11.jpg',
      name:'Pancakes',
      desc:'A reader will be distracted by the readable',
      price:'$07.79',
      category:'dinner'
    },
    {
      image:'assets/images/portfolio/rest/12.jpg',
      name:'American Item',
      desc:'A reader will be distracted by the readable',
      price:'$27.79',
      category:'tea'
    },
  ]

  selectedCategory:any = null;
  filteredData:any = this.menu

  filterItems(category:any){
    this.selectedCategory = category;
    this.filteredData = this.selectedCategory ? this.menu.filter((item:any) => item.category === this.selectedCategory) : this.menu
  }

  servicesData:ServicesData[] = [
    {
      image:'assets/images/icon/resto/dish.svg',
      title:'Food Meets Style',
      desc:'This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.'
    },
    {
      image:'assets/images/icon/resto/fast-food.svg',
      title:'Quality Check',
      desc:'This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.'
    },
    {
      image:'assets/images/icon/resto/tray.svg',
      title:'Opens 24/7',
      desc:'This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.'
    },
    {
      image:'assets/images/icon/resto/take-away.svg',
      title:'Home Delivery',
      desc:'This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.'
    },
  ]

  blogData:BlogData[] = [
    {
      image:'assets/images/blog/13.jpg',
      category:'Restaurant',
      title:'The Food Heaven',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      image:'assets/images/blog/14.jpg',
      category:'Drinks',
      title:'The Finest Drinks',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      image:'assets/images/blog/15.jpg',
      category:'Cafe',
      title:'The Best Dishes',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
  ]

  foodImages:string[] = [
    'assets/images/portfolio/rest/01.jpg',
    'assets/images/portfolio/rest/02.jpg',
    'assets/images/portfolio/rest/03.jpg',
    'assets/images/portfolio/rest/04.jpg',
    'assets/images/portfolio/rest/05.jpg',
    'assets/images/portfolio/rest/06.jpg',
    'assets/images/portfolio/rest/07.jpg',
    'assets/images/portfolio/rest/08.jpg',
    'assets/images/portfolio/rest/09.jpg',
    'assets/images/portfolio/rest/10.jpg',
    'assets/images/portfolio/rest/11.jpg',
    'assets/images/portfolio/rest/12.jpg',
  ]
  ngAfterViewInit(): void {
    feather.replace()
    
    tns({
      container: '.tiny-twelve-item',
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
      responsive: {
          1025: {
              items: 10
          },

          992: {
              items: 8
          },

          767: {
              items: 6
          },

          320: {
              items: 2
          },
      },
  });
  }
}
