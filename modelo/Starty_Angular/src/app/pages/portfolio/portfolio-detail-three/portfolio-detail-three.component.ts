import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import PortFolioData from '../../../data/classicportfolio.json'
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
import { LightgalleryModule } from 'lightgallery/angular';

interface PortfolioData{
  id: number;
  image: string;
  name: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-detail-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent,
    LightgalleryModule
  ],
  templateUrl: './portfolio-detail-three.component.html',
  styleUrl: './portfolio-detail-three.component.scss'
})
export class PortfolioDetailThreeComponent {
  portfolioData:PortfolioData[] = PortFolioData

  constructor(private Router:ActivatedRoute){}

  id:any
  data:any

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = this.portfolioData.find((item) => item.id === parseInt(this.id))
  }

  social:string[] = [
    'uil uil-facebook-f',
    'uil uil-instagram',
    'uil uil-twitter',
    'uil uil-linkedin',
    'uil uil-dribbble',
  ]
   images:string[] = [
    'assets/images/portfolio/02.jpg',
    'assets/images/portfolio/03.jpg',
    'assets/images/portfolio/04.jpg',
    'assets/images/portfolio/05.jpg',
    'assets/images/portfolio/06.jpg',
    'assets/images/portfolio/07.jpg',
    'assets/images/portfolio/08.jpg',
   ]
}
