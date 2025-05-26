import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PartnersComponent } from "../../../components/partners/partners.component";
import { FreelancerTabComponent } from "../../../components/tab/freelancer-tab/freelancer-tab.component";
import { LightgalleryModule } from 'lightgallery/angular';
import { ClientTwoComponent } from "../../../components/client/client-two/client-two.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

interface Feature {
  icon: string;
  title: string;
  title2: string;
  color: string;
}

interface ProjectData {
    image: string;
    name: string;
    title: string;
}

@Component({
  selector: 'app-index-freelancer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    FreelancerTabComponent,
    LightgalleryModule,
    ClientTwoComponent,
    FooterOneComponent
],
  templateUrl: './index-freelancer.component.html',
  styleUrl: './index-freelancer.component.scss'
})

export class IndexFreelancerComponent {
  feature : Feature[] =[
    {
      icon:'uil uil-mobile-android',
      title:'Web & Mobile',
      title2:'App Development',
      color:'feature-primary'
    },
    {
      icon:'uil uil-cube',
      title:'Blockchain',
      title2:'Development',
      color:'feature-success'
    },
    {
      icon:'uil uil-airplay',
      title:'Ui/Ux Design',
      title2:'For Mobile & Web',
      color:'feature-warning'
    },
    {
      icon:'uil uil-illustration',
      title:'Illustration Design',
      title2:'(Flat, 3D & More)',
      color:'feature-danger'
    },
    {
      icon:'uil uil-dribbble',
      title:'Branding Design',
      title2:'(Logo, Packaging)',
      color:'feature-warning'
    },
    {
      icon:'uil uil-airplay',
      title:'Digital Marketing',
      title2:'& Managemen',
      color:'feature-danger'
    },
    {
      icon:'uil uil-brackets-curly',
      title:'Custom Wordpress',
      title2:'Design & Dev.',
      color:'feature-primary'
    },
    {
      icon:'uil uil-puzzle-piece',
      title:'Stratagy & Product',
      title2:'Management',
      color:'feature-success'
    },
  ]

  projectData : ProjectData[] = [
    {
      image:'assets/images/portfolio/02.jpg',
      name:'The Papers',
      title:'Designing'
    },
    {
      image:'assets/images/portfolio/03.jpg',
      name:'The Headphones',
      title:'Photography'
    },
    {
      image:'assets/images/portfolio/04.jpg',
      name:'The Projects',
      title:'Development'
    },
    {
      image:'assets/images/portfolio/05.jpg',
      name:'The Cup of Coffee',
      title:'Branding'
    },
    {
      image:'assets/images/portfolio/06.jpg',
      name:'The Pen and Books',
      title:'Designing'
    },
    {
      image:'assets/images/portfolio/07.jpg',
      name:'The Strawberry',
      title:'Photography'
    },
  ]
}
