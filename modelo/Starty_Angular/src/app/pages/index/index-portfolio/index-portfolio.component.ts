import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PartnersComponent } from "../../../components/partners/partners.component";
import { PricingOneComponent } from "../../../components/pricing/pricing-one/pricing-one.component";
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { LightgalleryModule } from 'lightgallery/angular';
import { FooterSmallComponent } from "../../../components/footer/footer-small/footer-small.component";

interface WorkData {
  id: number;
  title: string;
  desc: string;
  process: boolean;
}

interface ProjectData {
  id: number;
  image: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-index-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    PricingOneComponent,
    BlogOneComponent,
    LightgalleryModule,
    FooterSmallComponent
],
  templateUrl: './index-portfolio.component.html',
  styleUrl: './index-portfolio.component.scss'
})
export class IndexPortfolioComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  workData :WorkData[] = [
    {
      id:1,
      title:'Concept',
      desc:'Write a short description Starty, that will describe the title or something informational and useful.',
      process:true
    },
    {
      id:2,
      title:'Development',
      desc:'Write a short description Starty, that will describe the title or something informational and useful.',
      process:true
    },
    {
      id:3,
      title:'Finish process',
      desc:'Write a short description Starty, that will describe the title or something informational and useful.',
      process:false
    },
  ]

  projectData:ProjectData[] = [
    {
      id:1,
      image:'assets/images/portfolio/01.jpg',
      title:'The Leaf and Letter',
      subTitle:'Branding'
    },
    {
      id:2,
      image:'assets/images/portfolio/02.jpg',
      title:'The Papers',
      subTitle:'Designing'
    },
    {
      id:3,
      image:'assets/images/portfolio/03.jpg',
      title:'The Headphones',
      subTitle:'Photography'
    },
    {
      id:4,
      image:'assets/images/portfolio/04.jpg',
      title:'The Headphones',
      subTitle:'Photography'
    },
    {
      id:5,
      image:'assets/images/portfolio/05.jpg',
      title:'The Cup of Coffee',
      subTitle:'Branding'
    },
    {
      id:6,
      image:'assets/images/portfolio/06.jpg',
      title:'The Pen and Books',
      subTitle:'Designing'
    },
  ]
}
