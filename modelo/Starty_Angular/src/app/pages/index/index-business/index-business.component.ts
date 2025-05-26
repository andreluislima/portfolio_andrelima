import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { PartnersComponent } from "../../../components/partners/partners.component";
import { TeamOneComponent } from "../../../components/team/team-one/team-one.component";
import { CountUpModule } from 'ngx-countup';
import { PricingThreeComponent } from "../../../components/pricing/pricing-three/pricing-three.component";
import { ClientSingleItemComponent } from "../../../components/client/client-single-item/client-single-item.component";
import { BlogTwoComponent } from "../../../components/blog/blog-two/blog-two.component";
import { FooterFourComponent } from "../../../components/footer/footer-four/footer-four.component";

interface AboutData {
  icon: string;
  title: string;
  desc: string;
}

interface Skill {
  title: string;
  value: string;
}

interface CounterData {
  title: string;
  value: number;
}

@Component({
  selector: 'app-index-business',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    TeamOneComponent,
    CountUpModule,
    PricingThreeComponent,
    ClientSingleItemComponent,
    BlogTwoComponent,
    FooterFourComponent
],
  templateUrl: './index-business.component.html',
  styleUrl: './index-business.component.scss'
})
export class IndexBusinessComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
swiper!: Swiper;
  constructor() {
    register()
  }
  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay:true,
      speed:3000,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  aboutData:AboutData[] = [
    {
      icon:'uil uil-analytics',
      title:'Business Analysis',
      desc:'Due to its Starty widespread use as filler text for layouts, non-readability is of great importance'
    },
    {
      icon:'uil uil-receipt',
      title:'Estate Planning',
      desc:'Due to its Starty widespread use as filler text for layouts, non-readability is of great importance'
    },
    {
      icon:'uil uil-bitcoin-circle',
      title:'Cryptocurrency',
      desc:'Due to its Starty widespread use as filler text for layouts, non-readability is of great importance'
    },
    {
      icon:'uil uil-moneybag-alt',
      title:'Security Enhanced',
      desc:'Due to its Starty widespread use as filler text for layouts, non-readability is of great importance'
    },
  ]

  skill:Skill[] = [
    {
      title:'Research',
      value:'84%'
    },
    {
      title:'Sales & Trading',
      value:'75%'
    },
    {
      title:'Investment',
      value:'79%'
    },
    {
      title:'Finance',
      value:'95%'
    },
  ]

  counterData:CounterData[] = [
    {
      title:'Investment Projects',
      value:5458
    },
    {
      title:'Years of Experience',
      value:15
    },
    {
      title:'Offices in the World',
      value:54
    },
    {
      title:'Successful Cases',
      value:214
    },
  ]
}
