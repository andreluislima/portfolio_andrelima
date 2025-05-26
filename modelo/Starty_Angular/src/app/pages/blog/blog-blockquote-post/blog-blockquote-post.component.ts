import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

@Component({
  selector: 'app-blog-blockquote-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogCommentsComponent,
    BlogSidebarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-blockquote-post.component.html',
  styleUrl: './blog-blockquote-post.component.scss'
})
export class BlogBlockquotePostComponent {

}
