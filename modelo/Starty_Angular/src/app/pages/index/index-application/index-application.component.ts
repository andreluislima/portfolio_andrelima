import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PartnersComponent } from "../../../components/partners/partners.component";

import { tns } from 'tiny-slider';
import * as feather from 'feather-icons'

import { CountUpModule } from 'ngx-countup';
import { ClientOneComponent } from "../../../components/client/client-one/client-one.component";
import { FaqOneComponent } from "../../../components/faq/faq-one/faq-one.component";
import { MobileAppComponent } from "../../../components/mobile-app/mobile-app.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

interface About {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-index-application',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    CountUpModule,
    ClientOneComponent,
    FaqOneComponent,
    MobileAppComponent,
    FooterOneComponent
],
  templateUrl: './index-application.component.html',
  styleUrl: './index-application.component.scss'
})
export class IndexApplicationComponent {

  services = [
    {
      icon:'uil uil-airplay',
      title:'Fast Performance',
      desc:'It is said that Starty song composers of the past used dummy texts as lyrics when writing to sing with the melody.'
    },
    {
      icon:'uil uil-atom',
      title:'Prototyping',
      desc:'It is said that Starty song composers of the past used dummy texts as lyrics when writing to sing with the melody.'
    },
    {
      icon:'uil uil-users-alt',
      title:'Vector Editing',
      desc:'It is said that Starty song composers of the past used dummy texts as lyrics when writing to sing with the melody.'
    },
  ]

  sliderImg:string[] = [
    'assets/images/app/1.png',
    'assets/images/app/2.png',
    'assets/images/app/3.png'
  ]

  analytics : string[] = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand'
  ]

  about : About [] = [
    {
      title:'Buy, sell, and trade on the go',
      desc:'Manage your holdings from your mobile device'
    },
    {
      title:'Take control of your wealth',
      desc:'Manage your holdings from your mobile device'
    },
  ]

  counter = [
    {
      target:5458,
      title:'Investment Projects'
    },
    {
      target:15,
      title:'Years of Experience'
    },
    {
      target:54,
      title:'Offices in the World'
    },
    {
      target:214,
      title:'Successful Cases'
    },
  ]

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

  feather.replace()

  }
}
