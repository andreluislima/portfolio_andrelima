import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { ClassicPortfolioComponent } from '../../../components/portfolio/classic-portfolio/classic-portfolio.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-portfolio-classic-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ClassicPortfolioComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-classic-four.component.html',
  styleUrl: './portfolio-classic-four.component.scss'
})
export class PortfolioClassicFourComponent {

}
