import { Component } from '@angular/core';

import BlogData from '../../../data/blog/blog-grid.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Blog {
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  date: string;
}
@Component({
  selector: 'app-blog-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-one.component.html',
  styleUrl: './blog-one.component.scss'
})
export class BlogOneComponent {
  blogData:Blog[] = BlogData.slice(0,3)
}
