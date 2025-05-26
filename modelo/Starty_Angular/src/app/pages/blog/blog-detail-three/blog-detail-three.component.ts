import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import BlogData from '../../../data/blog/blog-masonary.json'
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
import * as feather from 'feather-icons'
import { BlogSidebarTwoComponent } from "../../../components/blog/blog-sidebar-two/blog-sidebar-two.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
interface BlogData {
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
  selector: 'app-blog-detail-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogCommentsComponent,
    BlogSidebarTwoComponent,
    FooterFiveComponent
],
  templateUrl: './blog-detail-three.component.html',
  styleUrl: './blog-detail-three.component.scss'
})
export class BlogDetailThreeComponent {
  blogData = BlogData
  id:any
  data:any

  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = this.blogData.find((item) => item.id === parseInt(this.id))
  }

  ngAfterViewInit(): void {
    feather.replace()
  }

}
