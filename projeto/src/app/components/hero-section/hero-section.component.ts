import { Component } from '@angular/core';
import { SocialMediasComponent } from "../social-medias/social-medias.component";

@Component({
  selector: 'app-hero-section',
  imports: [SocialMediasComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  title="About Me"
  description: string = `Full stack developer specialized in creating fast, responsive, and SEO-friendly websites for businesses seeking a stronger online presence.`

  // description: string = `My Name is André Lima and I Web Developer specialized in creating modern, fast and responsive websites focused on helping businesses improve their online presence.<br>
  // I have serveral years of experience in web development, working on both public sector, aways aiming to deliver solutions that are functional, secure and visually appealing. <br>
  // If you're looking for someone to deliver a well-buit website with good usability and user experience, i'm here to help.`

}
