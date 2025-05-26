import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { ModernPortfolioComponent } from '../../../components/portfolio/modern-portfolio/modern-portfolio.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-portfolio-modern-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ModernPortfolioComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-modern-four.component.html',
  styleUrl: './portfolio-modern-four.component.scss'
})
export class PortfolioModernFourComponent {

}
