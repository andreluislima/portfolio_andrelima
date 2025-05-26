import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Catagories{
  title: string;
  value: string;
}

@Component({
  selector: 'app-blog-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-sidebar.component.html',
  styleUrl: './blog-sidebar.component.scss'
})
export class BlogSidebarComponent {
  @Input() search:any
  catagories:Catagories[] = [
    {
      title:'Finance',
      value:'13'
    },
    {
      title:'Business',
      value:'09'
    },
    {
      title:'Blog',
      value:'18'
    },
    {
      title:'Corporate',
      value:'20'
    },
    {
      title:'Investment',
      value:'22'
    },
  ]

  recentPost = [
    {
      image:'assets/images/blog/01.jpg',
      title:'Consultant Business',
      date:'13th March 2023'
    },
    {
      image:'assets/images/blog/02.jpg',
      title:'Grow Your Business',
      date:'5th May 2023'
    },
    {
      image:'assets/images/blog/03.jpg',
      title:'Look On The Glorious Balance',
      date:'19th June 2023'
    },
  ]

  tag = [
    'Business','Finance','Marketing','Fashion','Bride','Lifestyle','Travel','Beauty','Video','Audio'
  ]
}
