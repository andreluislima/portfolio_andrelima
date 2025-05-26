import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

@Component({
  selector: 'app-blog-slider-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    BlogCommentsComponent,
    FooterFiveComponent
],
  templateUrl: './blog-slider-post.component.html',
  styleUrl: './blog-slider-post.component.scss'
})
export class BlogSliderPostComponent {

}
