import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';
import PortFolioData from '../../../data/masonaryportfolio.json'

interface PortfolioData{
  id: number;
  image: string;
  name: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-detail-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-detail-four.component.html',
  styleUrl: './portfolio-detail-four.component.scss'
})
export class PortfolioDetailFourComponent {

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
  tag:string[] = [
    'Business','Finance','Marketing','Fashion','Bride','Lifestyle','Travel','Beauty','Video','Audio'
  ]
}
