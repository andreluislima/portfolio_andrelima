import { Component } from '@angular/core';
import { SocialMediasComponent } from "../social-medias/social-medias.component";
import { PresentationComponent } from "../presentation/presentation.component";

@Component({
  selector: 'app-hero-section',
  imports: [SocialMediasComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  title="Sobre Mim"
  description: string = `Desenvolvedor Full Stack com experiência na criação de sites rápidos, responsivos e visualmente atrativos, focando na performance e na entrega de interfaces modernas e funcionais.`

  // description: string = `My Name is André Lima and I Web Developer specialized in creating modern, fast and responsive websites focused on helping businesses improve their online presence.<br>
  // I have serveral years of experience in web development, working on both public sector, aways aiming to deliver solutions that are functional, secure and visually appealing. <br>
  // If you're looking for someone to deliver a well-buit website with good usability and user experience, i'm here to help.`

}
