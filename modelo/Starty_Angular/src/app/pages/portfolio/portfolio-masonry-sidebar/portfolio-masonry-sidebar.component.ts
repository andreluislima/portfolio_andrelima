import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { MasonaryPortfolioComponent } from '../../../components/portfolio/masonary-portfolio/masonary-portfolio.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';
import { BlogSidebarComponent } from '../../../components/blog/blog-sidebar/blog-sidebar.component';

@Component({
  selector: 'app-portfolio-masonry-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MasonaryPortfolioComponent,
    FooterFiveComponent,
    BlogSidebarComponent
  ],
  templateUrl: './portfolio-masonry-sidebar.component.html',
  styleUrl: './portfolio-masonry-sidebar.component.scss'
})
export class PortfolioMasonrySidebarComponent {

}
