import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import BlogData from  '../../../data/blog/blog-masonary.json'
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
  selector: 'app-blog-masonry',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-masonry.component.html',
  styleUrl: './blog-masonry.component.scss'
})
export class BlogMasonryComponent {
  blogData:BlogData[] = BlogData
}
