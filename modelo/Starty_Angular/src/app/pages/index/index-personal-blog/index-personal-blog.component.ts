import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { FooterFourComponent } from "../../../components/footer/footer-four/footer-four.component";

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-index-personal-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFourComponent
],
  templateUrl: './index-personal-blog.component.html',
  styleUrl: './index-personal-blog.component.scss'
})
export class IndexPersonalBlogComponent {
  blogData:BlogData[] = [
    {
      id:1,
      image:'assets/images/blog/img01.jpg',
      category:'Branding',
      title:'The Dark Side of Overnight Success',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      id:2,
      image:'assets/images/blog/img03.jpg',
      category:'Technology',
      title:'The Right Hand of Business IT World',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      id:3,
      image:'assets/images/blog/07.jpg',
      category:'Personal',
      title:'How to Create Your Own Viral Moments',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      id:4,
      image:'assets/images/blog/03.jpg',
      category:'Business',
      title:'How to Write a Business Plan For Any Business',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      id:5,
      image:'assets/images/blog/img02.jpg',
      category:'Marketing',
      title:'Seeing the Customer Journey More Clearly',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      id:6,
      image:'assets/images/blog/06.jpg',
      category:'Production',
      title:'The Signs of a Highly Giftable Product',
      desc:`The most well-known dummy Starty text is the 'Lorem Ipsum', in the 16th century.`
    },
  ]
}
