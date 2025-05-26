import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import BlogData from '../../../data/blog/blog-grid.json'

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  date: string;
}

@Component({
  selector: 'app-blog-author',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent,
    BlogSidebarComponent
],
  templateUrl: './blog-author.component.html',
  styleUrl: './blog-author.component.scss'
})
export class BlogAuthorComponent {
  BlogData:BlogData[] = BlogData
}
