import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';
import { CreativePortfolioComponent } from '../../../components/portfolio/creative-portfolio/creative-portfolio.component';

@Component({
  selector: 'app-portfolio-creative-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent,
    CreativePortfolioComponent
  ],
  templateUrl: './portfolio-creative-five.component.html',
  styleUrl: './portfolio-creative-five.component.scss'
})
export class PortfolioCreativeFiveComponent {

}
