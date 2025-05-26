import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";

import BlogData from '../../../data/blog/blog-image-masonary-grid.json'
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface BlogData {
  id: number;
  image: string;
  category: string;
  title: string;
  client: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-blog-image-masonry',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-image-masonry.component.html',
  styleUrl: './blog-image-masonry.component.scss'
})
export class BlogImageMasonryComponent {
  blogData:BlogData[] = BlogData
}
