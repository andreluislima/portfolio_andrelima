import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import * as feather from 'feather-icons'
import { TeamOneComponent } from "../../../components/team/team-one/team-one.component";
import { ClientOneComponent } from "../../../components/client/client-one/client-one.component";
import { ClientSingleItemComponent } from "../../../components/client/client-single-item/client-single-item.component";
import { tns } from 'tiny-slider';
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";


interface Solutions{
  icon: string;
  title: string;
  desc: string;
}
interface ClientData{
  image: string;
  name: string;
  position: string;
  desc: string;
}

@Component({
  selector: 'app-index-corporate',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TeamOneComponent,
    BlogOneComponent,
    FooterOneComponent
],
  templateUrl: './index-corporate.component.html',
  styleUrl: './index-corporate.component.scss'
})
export class IndexCorporateComponent {

  taglineSocial:string[] = [
    'uil uil-facebook-f','uil uil-instagram','uil uil-twitter','uil uil-linkedin'
  ]

  solutions:Solutions[] = [
    {
      icon:'uil uil-airplay',
      title:'Responsive Design',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
    {
      icon:'uil uil-eye',
      title:'Retina Ready Graphics',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
    {
      icon:'uil uil-tachometer-fast-alt',
      title:'Powerful Performance',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
    {
      icon:'uil uil-palette',
      title:'Unlimited Color Options',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
    {
      icon:'uil uil-font',
      title:'Customizable Fonts',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
    {
      icon:'uil uil-file-upload-alt',
      title:'Free Updates',
      desc:`This prevents Starty repetitive patterns from impairing the overall facilitates the comparison.`
    },
  ]

  about:string[] = [
    'Fully Responsive',
    'Finance & Restructuring',
    'Audit & Assurance',
    'Trades & Stock Market',
    'Strategy & Planning',
    'Software & Research',
    'Support & Maintenance',
  ]

  skill = [
    {
      title:'Research',
      width:'84%'
    },
    {
      title:'Sales & Trading',
      width:'75%'
    },
    {
      title:'Investment',
      width:'79%'
    },
    {
      title:'Finance',
      width:'95%'
    },
  ]

  clientData:ClientData[]  = [
    {
      image:'assets/images/client/01.jpg',
      name:'Johnny Rosario',
      position:'C.E.O',
      desc:`" The advantage of its Latin origin and the relative Starty meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Gale Larose',
      position:'Manager',
      desc:`" The advantage of its Latin origin and the relative meaninglessness Starty of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Shelly Goodman',
      position:'Manager',
      desc:`" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the Starty characteristics of different typefaces. "`
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
}
