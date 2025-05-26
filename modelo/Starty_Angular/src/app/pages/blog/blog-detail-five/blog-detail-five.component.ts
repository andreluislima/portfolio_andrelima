import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import BlogData from '../../../data/blog/blog-grid.json'
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
import * as feather from 'feather-icons'
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
  selector: 'app-blog-detail-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogCommentsComponent,
    FooterFiveComponent
],
  templateUrl: './blog-detail-five.component.html',
  styleUrl: './blog-detail-five.component.scss'
})
export class BlogDetailFiveComponent {
  blogData:BlogData[] = BlogData

  id:any
  data:any

  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.paramMap.get('id')
    this.data = this.blogData.find((item)=>item.id === parseInt(this.id))
  }
  ngAfterViewInit(): void {
    feather.replace()
  }
}



