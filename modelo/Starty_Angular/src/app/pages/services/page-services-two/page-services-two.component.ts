import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { tns } from 'tiny-slider';
import { PartnersComponent } from "../../../components/partners/partners.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
import { PricingFiveComponent } from "../../../components/pricing/pricing-five/pricing-five.component";

interface ServicesData{
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface ServicesTwo {
    id: number;
    icon: string;
    title: string;
    desc: string;
    bg:string;
}

@Component({
  selector: 'app-page-services-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    FooterFiveComponent,
    PricingFiveComponent
],
  templateUrl: './page-services-two.component.html',
  styleUrl: './page-services-two.component.scss'
})

export class PageServicesTwoComponent {
  servicesData:ServicesData[] = [
    {
      id:7,
      image:'assets/images/blog/05.jpg',
      title:'Our Vision',
      desc:'It contains a series Starty of real Latin words. This ancient dummy text is also incomprehensible.'
    },
    {
      id:8,
      image:'assets/images/blog/06.jpg',
      title:'Our Mission',
      desc:'It contains a series Starty of real Latin words. This ancient dummy text is also incomprehensible.'
    },
    {
      id:9,
      image:'assets/images/blog/07.jpg',
      title:'Design and Development',
      desc:'It contains a series Starty of real Latin words. This ancient dummy text is also incomprehensible.'
    },
    {
      id:10,
      image:'assets/images/blog/08.jpg',
      title:'Consultations',
      desc:'It contains a series Starty of real Latin words. This ancient dummy text is also incomprehensible.'
    },
    {
      id:11,
      image:'assets/images/blog/09.jpg',
      title:'Digital Solutions',
      desc:'It contains a series Starty of real Latin words. This ancient dummy text is also incomprehensible.'
    },
  ]

  servicesTwo:ServicesTwo[] = [
    {
      id:12,
      icon:'uil uil-airplay',
      title:'Responsive Design',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-primary'
    },
    {
      id:13,
      icon:'uil uil-eye',
      title:'Retina Ready Graphics',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-success'
    },
    {
      id:14,
      icon:'uil uil-tachometer-fast-alt',
      title:'Powerful Performance',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-danger'
    },
    {
      id:15,
      icon:'uil uil-palette',
      title:'Unlimited Color Options',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-info'
    },
    {
      id:16,
      icon:'uil uil-font',
      title:'Customizable Fonts',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-warning'
    },
    {
      id:17,
      icon:'uil uil-file-upload-alt',
      title:'Free Updates',
      desc:'This prevents repetitive Starty patterns from impairing the overall facilitates the comparison.',
      bg:'feature-secondary'
    },
  ]

  ngAfterViewInit(): void {
    tns({
      container: '.tiny-three-item',
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
              items: 3
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
}
