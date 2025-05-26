import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { ModernPortfolioComponent } from '../../../components/portfolio/modern-portfolio/modern-portfolio.component';
import { BlogSidebarComponent } from '../../../components/blog/blog-sidebar/blog-sidebar.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-portfolio-modern-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ModernPortfolioComponent,
    BlogSidebarComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-modern-sidebar.component.html',
  styleUrl: './portfolio-modern-sidebar.component.scss'
})
export class PortfolioModernSidebarComponent {

}
