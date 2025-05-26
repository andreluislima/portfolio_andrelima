import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";

import BlogData from '../../../data/blog/blog-image-grid.json'
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
  selector: 'app-blog-image-grid',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-image-grid.component.html',
  styleUrl: './blog-image-grid.component.scss'
})
export class BlogImageGridComponent {

  blogData:BlogData[] = BlogData

}
