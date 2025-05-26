import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleNavbarComponent } from "../../../components/navbar/single-navbar/single-navbar.component";
import { PartnersComponent } from "../../../components/partners/partners.component";
import { tns } from 'tiny-slider';

import * as feather from 'feather-icons'
import { CountUpModule } from 'ngx-countup';
import { ClientOneComponent } from "../../../components/client/client-one/client-one.component";
import { FaqOneComponent } from "../../../components/faq/faq-one/faq-one.component";
import { MobileAppComponent } from "../../../components/mobile-app/mobile-app.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

interface Services{
  icon: string;
  title: string;
  desc: string;
}

interface AboutTwo{
    title: string;
    desc: string;
}

@Component({
  selector: 'app-index-onepage',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SingleNavbarComponent,
    PartnersComponent,
    CountUpModule,
    ClientOneComponent,
    FaqOneComponent,
    MobileAppComponent,
    FooterOneComponent
],
  templateUrl: './index-onepage.component.html',
  styleUrl: './index-onepage.component.scss'
})
export class IndexOnepageComponent {
  currentSection: string | null = 'home';

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
        this.currentSection = sectionId;
      }
    });
  }

  services:Services[] = [
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

  images:string[] = [
    'assets/images/app/1.png',
    'assets/images/app/2.png',
    'assets/images/app/3.png'
  ]

  about:string[] = [
    'Digital Marketing Starty Solutions for Tomorrow',
    'Our Starty Talented & Experienced Marketing Agency',
    'Create your own skin to match Starty your brand'
  ]

  aboutTwo:AboutTwo[] = [
    {
      title:'Buy, sell, and trade on the go',
      desc:'Manage your holdings Starty from your mobile device'
    },
    {
      title:'Take control of your wealth',
      desc:'Rest assured Starty you (and only you) have access to your funds'
    },
  ]

  ngAfterViewInit(): void {
    feather.replace()
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

  counterData = [
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
