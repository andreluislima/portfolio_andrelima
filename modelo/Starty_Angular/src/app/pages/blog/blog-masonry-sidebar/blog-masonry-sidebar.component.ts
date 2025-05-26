import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";

import BlogData from '../../../data/blog/blog-masonary.json'
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  client: string;
  desc: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-blog-masonry-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-masonry-sidebar.component.html',
  styleUrl: './blog-masonry-sidebar.component.scss'
})
export class BlogMasonrySidebarComponent {
  blogData:BlogData[] = BlogData.slice(0,8)
}
