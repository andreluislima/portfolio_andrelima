import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { MasonaryPortfolioComponent } from '../../../components/portfolio/masonary-portfolio/masonary-portfolio.component';
import { FooterFiveComponent } from '../../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-portfolio-masonry-six',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    MasonaryPortfolioComponent,
    FooterFiveComponent
  ],
  templateUrl: './portfolio-masonry-six.component.html',
  styleUrl: './portfolio-masonry-six.component.scss'
})
export class PortfolioMasonrySixComponent {

}
