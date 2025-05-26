import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import BlogData from '../../../data/blog/blog-image-grid.json'
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  client: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-blog-image-grid-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-image-grid-sidebar.component.html',
  styleUrl: './blog-image-grid-sidebar.component.scss'
})

export class BlogImageGridSidebarComponent {
  blogData:BlogData[] = BlogData.slice(0,8)
}
