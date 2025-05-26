import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";

@Component({
  selector: 'app-blog-html-audio-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFiveComponent,
    BlogCommentsComponent
],
  templateUrl: './blog-html-audio-post.component.html',
  styleUrl: './blog-html-audio-post.component.scss'
})
export class BlogHtmlAudioPostComponent {

}
