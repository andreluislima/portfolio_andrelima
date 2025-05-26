import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { ClassicPortfolioComponent } from '../../../components/portfolio/classic-portfolio/classic-portfolio.component';
import { BlogSidebarComponent } from '../../../components/blog/blog-sidebar/blog-sidebar.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-portfolio-classic-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ClassicPortfolioComponent,
    BlogSidebarComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-classic-sidebar.component.html',
  styleUrl: './portfolio-classic-sidebar.component.scss'
})
export class PortfolioClassicSidebarComponent {

}
