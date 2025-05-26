import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
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
  selector: 'app-blog-image-masonry-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-image-masonry-sidebar.component.html',
  styleUrl: './blog-image-masonry-sidebar.component.scss'
})
export class BlogImageMasonrySidebarComponent {
blogData = BlogData
}
