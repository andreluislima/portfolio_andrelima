import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import BlogData from '../../../data/blog/blog-grid.json'
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  date: string;
}
@Component({
  selector: 'app-blog-grid',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.scss'
})
export class BlogGridComponent {
  blogData:BlogData[] = BlogData
}
