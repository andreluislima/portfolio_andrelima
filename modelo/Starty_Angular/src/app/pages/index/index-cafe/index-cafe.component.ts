import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { ClientSingleItemComponent } from "../../../components/client/client-single-item/client-single-item.component";
import { tns } from 'tiny-slider';
import { CafeFooterComponent } from "../../../components/footer/cafe-footer/cafe-footer.component";

interface Feature{
  image: string;
  title: string;
  desc: string;
}

interface ClientData {
    image: string;
    desc: string;
    name: string;
}

interface Menu {
  image: string;
  name: string;
  price: string;
  desc: string;
}

@Component({
  selector: 'app-index-cafe',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ClientSingleItemComponent,
    CafeFooterComponent
],
  templateUrl: './index-cafe.component.html',
  styleUrl: './index-cafe.component.scss'
})
export class IndexCafeComponent {
  bgImage = [
    'assets/images/bg/cafe01.jpg',
    'assets/images/bg/cafe02.jpg',
    'assets/images/bg/cafe03.jpg'
  ]

  currentImageIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.bgImage.length;
    }, 3000); // Change image every 3 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
  }

  featureOne:Feature[] = [
    {
      image:'assets/images/icon/cafe/coffee-time.svg',
      title:'High Quality',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
    {
      image:'assets/images/icon/cafe/pot.svg',
      title:'Pure Grades',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
    {
      image:'assets/images/icon/cafe/coffee-beans.svg',
      title:'roper Roasting',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
  ]
  featureTwo:Feature[] = [
    {
      image:'assets/images/icon/cafe/coffee.svg',
      title:'High Quality',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
    {
      image:'assets/images/icon/cafe/drip-glass.svg',
      title:'Pure Grades',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
    {
      image:'assets/images/icon/cafe/coffee-cup.svg',
      title:'roper Roasting',
      desc:'Composed Starty in a pseudo-Latin language which more or less pseudo-Latin.'
    },
  ]

  clientData:ClientData[] = [
    {
      image:'assets/images/client/01.jpg',
      desc:`" The advantage Starty of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`,
      name:'Johnny Rosario'
    },
    {
      image:'assets/images/client/02.jpg',
      desc:`" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. "`,
      name:'Gale Larose'
    },
    {
      image:'assets/images/client/03.jpg',
      desc:`" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces. "`,
      name:'Shelly Goodman'
    },
  ]

  menu:Menu[] = [
    {
      image:'assets/images/portfolio/cafe/01.jpg',
      name:'Cafe Latte',
      price:'$13.79',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/02.jpg',
      name:'Ice Coffee',
      price:'$12.49',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/03.jpg',
      name:'Mocha',
      price:'$10.99',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/04.jpg',
      name:'Espresso',
      price:'$19.99',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/05.jpg',
      name:'Americano',
      price:'$17.79',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/06.jpg',
      name:'Boerewors',
      price:'$57.79',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/01.jpg',
      name:'Cafe Latte',
      price:'$13.79',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/02.jpg',
      name:'Ice Coffee',
      price:'$12.49',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/03.jpg',
      name:'Mocha',
      price:'$10.99',
      desc:'A reader will be distracted by the readable'
    },
    {
      image:'assets/images/portfolio/cafe/04.jpg',
      name:'Espresso',
      price:'$19.99',
      desc:'A reader will be distracted by the readable'
    },
  ]

}
