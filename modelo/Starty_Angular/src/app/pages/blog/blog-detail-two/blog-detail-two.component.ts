import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import BlogData from '../../../data/blog/blog-image-grid.json'
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
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

@Component({
  selector: 'app-blog-detail-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogCommentsComponent,
    FooterFiveComponent
],
  templateUrl: './blog-detail-two.component.html',
  styleUrl: './blog-detail-two.component.scss'
})

export class BlogDetailTwoComponent {
  blogData:BlogData[] = BlogData

  id:any
  data:any

  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = this.blogData.find((item) => item.id === parseInt(this.id))
  }
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
