import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import PortFolioData from '../../../data/classicportfolio.json'
import { tns } from 'tiny-slider';
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface PortfolioData{
  id: number;
  image: string;
  name: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-detail-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './portfolio-detail-one.component.html',
  styleUrl: './portfolio-detail-one.component.scss'
})
export class PortfolioDetailOneComponent {
  portfolioData:PortfolioData[] = PortFolioData

  constructor(private Router:ActivatedRoute){}

  id:any
  data:any

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = this.portfolioData.find((item) => item.id === parseInt(this.id))
  }

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
  }
  social:string[] = [
    'uil uil-facebook-f',
    'uil uil-instagram',
    'uil uil-twitter',
    'uil uil-linkedin',
    'uil uil-dribbble',
  ]

}
