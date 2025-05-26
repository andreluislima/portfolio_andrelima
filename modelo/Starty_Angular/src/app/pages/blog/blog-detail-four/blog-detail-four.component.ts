import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import BlogData from '../../../data/blog/blog-image-masonary-grid.json'
import BlogData2 from '../../../data/blog/blog-grid.json'
import { BlogSidebarTwoComponent } from "../../../components/blog/blog-sidebar-two/blog-sidebar-two.component";
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
import { LightgalleryModule } from 'lightgallery/angular';
import { tns } from 'tiny-slider';
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  client: string;
  name: string;
  date: string;
}
interface BlogData2{
    id: number;
    image: string;
    category: string;
    title: string;
    desc: string;
    date: string;
}

@Component({
  selector: 'app-blog-detail-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarTwoComponent,
    BlogCommentsComponent,
    LightgalleryModule,
    FooterFiveComponent
],
  templateUrl: './blog-detail-four.component.html',
  styleUrl: './blog-detail-four.component.scss'
})
export class BlogDetailFourComponent {
  blogData:BlogData[] = BlogData
  blogData2:BlogData2[]= BlogData2
  id:any
  data:any

  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = this.blogData.find((item:BlogData) => item.id === parseInt(this.id))
  }

  portfolioImg = [
    'assets/images/portfolio/01.jpg',
    'assets/images/portfolio/02.jpg',
    'assets/images/portfolio/03.jpg',
    'assets/images/portfolio/04.jpg',
    'assets/images/portfolio/05.jpg',
    'assets/images/portfolio/06.jpg',
  ]

  ngAfterViewInit(): void {
    tns({
      container: '.tiny-three-item',
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      speed: 400,
      gutter: 12,
      responsive: {
          992: {
              items: 3
          },

          767: {
              items: 2
          },

          320: {
              items: 1
          },
      },
  });
  }
}
