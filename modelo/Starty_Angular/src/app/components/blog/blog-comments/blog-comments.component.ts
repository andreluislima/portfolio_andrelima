import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  selector: 'app-blog-comments',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-comments.component.html',
  styleUrl: './blog-comments.component.scss'
})
export class BlogCommentsComponent {
  @Input() onlyComments:any
  blogData:BlogData[] = BlogData.slice(0,2)
}
