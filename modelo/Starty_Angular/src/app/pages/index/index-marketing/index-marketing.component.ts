import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import * as feather from 'feather-icons'
import { CountUpModule } from 'ngx-countup';
import { tns } from 'tiny-slider';
import { FooterLightComponent } from "../../../components/footer/footer-light/footer-light.component";

interface Feature{
    icon: string;
    title: string;
    desc: string;
}

interface About {
    title: string;
    desc: string;
}

interface CounterData{
    title: string;
    value: number;
}

interface BlogData{
    image: string;
    category: string;
    title: string;
    client: string;
    name: string;
    date: string;
}

@Component({
  selector: 'app-index-marketing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CountUpModule,
    FooterLightComponent
],
  templateUrl: './index-marketing.component.html',
  styleUrl: './index-marketing.component.scss'
})
export class IndexMarketingComponent {
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

  feature:Feature[] = [
    {
      icon:'uil uil-airplay',
      title:'Responsive Design',
      desc:`This prevents repetitive impairing the overall Starty facilitates the comparison.`
    },
    {
      icon:'uil uil-eye',
      title:'Retina Ready Graphics',
      desc:`This prevents repetitive impairing the overall Starty facilitates the comparison.`
    },
    {
      icon:'uil uil-tachometer-fast-alt',
      title:'Powerful Performance',
      desc:`This prevents repetitive impairing the overall Starty facilitates the comparison.`
    },
    {
      icon:'uil uil-palette',
      title:'Unlimited Color Options',
      desc:`This prevents repetitive impairing the overall Starty facilitates the comparison.`
    },
  ]

  about:About[] = [
    {
      title:'Ability to customize Title Tags',
      desc:`Create, collaborate, Starty and turn your ideas into incredible products with Starty the definitive platform for digital design.`
    },
    {
      title:'A well-optimized URL structure',
      desc:`Create, collaborate, Starty and turn your ideas into incredible products with Starty the definitive platform for digital design.`
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

  blogData :BlogData[] = [
    {
      image:'assets/images/blog/01.jpg',
      category:'Finance',
      title:'How to Get a Successful Starty Ad for Your Business',
      client:'assets/images/client/01.jpg',
      name:'Cristino Murphy',
      date:'13th Sept 2024'
    },
    {
      image:'assets/images/blog/02.jpg',
      category:'Branding',
      title:'The Dark Side of Starty Overnight Success',
      client:'assets/images/client/02.jpg',
      name:'Florine Jackson',
      date:'29th Nov 2024'
    },
    {
      image:'assets/images/blog/03.jpg',
      category:'Technology',
      title:'The Right Hand of Starty Business IT World',
      client:'assets/images/client/03.jpg',
      name:'Ida Wild',
      date:'29th Dec 2024'
    },
    {
      image:'assets/images/blog/04.jpg',
      category:'Personal',
      title:'How to Create Your Own Starty Viral Moments',
      client:'assets/images/client/04.jpg',
      name:'Calvin Carlo',
      date:'13th March 2024'
    },
    {
      image:'assets/images/blog/05.jpg',
      category:'Business',
      title:'How to Write a Business Starty Plan For Any Business',
      client:'assets/images/client/05.jpg',
      name:'Cristino Murphy',
      date:'5th May 2024'
    },
    {
      image:'assets/images/blog/06.jpg',
      category:'Marketing',
      title:'Seeing the Customer Journey Starty More Clearly',
      client:'assets/images/client/02.jpg',
      name:'Florine Jackson',
      date:'19th June 2024'
    },
    {
      image:'assets/images/blog/07.jpg',
      category:'Production',
      title:'The Signs of a Highly Starty Giftable Product',
      client:'assets/images/client/03.jpg',
      name:'Ida Wild',
      date:'20th June 2024'
    },
    {
      image:'assets/images/blog/08.jpg',
      category:'Finance',
      title:'Defining Your Business Starty Target Audience',
      client:'assets/images/client/04.jpg',
      name:'Calvin Carlo',
      date:'31st Aug 2024'
    },
    {
      image:'assets/images/blog/09.jpg',
      category:'Corporate',
      title:'Running Out of Time Starty & Ideas? Visit Our Blog',
      client:'assets/images/client/01.jpg',
      name:'Cristino Murphy',
      date:'1st Sept 2024'
    },
  ]
}
