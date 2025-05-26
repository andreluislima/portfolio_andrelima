import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface RecentPost {
    image: string;
    name: string;
    date: string;
}

@Component({
  selector: 'app-blog-sidebar-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-sidebar-two.component.html',
  styleUrl: './blog-sidebar-two.component.scss'
})
export class BlogSidebarTwoComponent {
  social:string[] = [
    'uil uil-facebook-f',
    'uil uil-instagram',
    'uil uil-twitter',
    'uil uil-linkedin',
    'uil uil-dribbble'
  ]

  recentPost:RecentPost[] = [
    {
      image:'assets/images/blog/01.jpg',
      name:'Consultant Business',
      date:'13th Sep 2024'
    },
    {
      image:'assets/images/blog/02.jpg',
      name:'Grow Your Business',
      date:'29th Dec 2024'
    },
    {
      image:'assets/images/blog/03.jpg',
      name:'Look On The Glorious Balance',
      date:'13th March 2024'
    },
  ]

  tag:string[] =[
    'Business','Finance','Marketing','Fashion','Bride','Lifestyle','Travel','Beauty','Video','Audio'
  ]
  
}
