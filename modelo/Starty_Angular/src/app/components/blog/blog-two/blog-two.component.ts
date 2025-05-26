import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import BlogData from '../../../data/blog/blog-grid.json'

interface BlogData {
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  date: string;
}

@Component({
  selector: 'app-blog-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-two.component.html',
  styleUrl: './blog-two.component.scss'
})
export class BlogTwoComponent {

  blogData = BlogData.slice(0,2)

}
