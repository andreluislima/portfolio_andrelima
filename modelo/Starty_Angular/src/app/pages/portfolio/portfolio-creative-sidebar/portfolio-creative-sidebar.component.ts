import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { CreativePortfolioComponent } from '../../../components/portfolio/creative-portfolio/creative-portfolio.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";

@Component({
  selector: 'app-portfolio-creative-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CreativePortfolioComponent,
    FooterFiveComponent,
    BlogSidebarComponent
],
  templateUrl: './portfolio-creative-sidebar.component.html',
  styleUrl: './portfolio-creative-sidebar.component.scss'
})
export class PortfolioCreativeSidebarComponent {

}
