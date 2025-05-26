import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { ProjectOneComponent } from "../../../components/project/project-one/project-one.component";
import { PricingOneComponent } from "../../../components/pricing/pricing-one/pricing-one.component";
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

interface Feature {
  icon: string;
  title: string;
  decs: string;
}

interface WorkData {
    id: number;
    title: string;
    desc: string;
}

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ProjectOneComponent,
    PricingOneComponent,
    BlogOneComponent,
    FooterOneComponent
  ],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.scss'
})
export class StartupComponent {
  feature:Feature[] = [
    {
      icon:'uil uil-airplay',
      title:'Responsive Design',
      decs:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
    {
      icon:'uil uil-eye',
      title:'Retina Ready Graphics',
      decs:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
    {
      icon:'uil uil-tachometer-fast-alt',
      title:'Powerful Performance',
      decs:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
    {
      icon:'uil uil-palette',
      title:'Unlimited Color Options',
      decs:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
  ]

  aboutData:string[] = [
    'Beautiful and easy to understand animations',
    'Our Talented & Experienced Marketing Agency',
    'Theme advantages are pixel perfect design',
  ]

  workData:WorkData[] = [
    {
      id:1,
      title:'Concept',
      desc:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
    {
      id:2,
      title:'Development',
      desc:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
    {
      id:3,
      title:'Live Demo',
      desc:'This prevents repetitive impairing the overall facilitates the comparison.'
    },
  ]
}
