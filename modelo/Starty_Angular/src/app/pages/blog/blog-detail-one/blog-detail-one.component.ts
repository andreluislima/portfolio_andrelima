import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import BlogData from '../../../data/blog/blog-grid.json'
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
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
  selector: 'app-blog-detail-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogOneComponent,
    FooterFiveComponent
],
  templateUrl: './blog-detail-one.component.html',
  styleUrl: './blog-detail-one.component.scss'
})
export class BlogDetailOneComponent {
  blogData : BlogData[] = BlogData

  id:any
  data:any

  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data =this.blogData.find((item)=>item.id === parseInt(this.id))
  }

  social:string[] = [
    'uil uil-facebook-f',
    'uil uil-instagram',
    'uil uil-twitter',
    'uil uil-linkedin',
    'uil uil-dribbble'
  ]
}
