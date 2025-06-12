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
  predescription="Meu nome é André Lima e ajudo empresas a crescer no ambiente digital"
// My Name is André Lima and I 

  description="Tenho paixão por design e desenvolvimento, criando soluções digitais modernas, eficientes e escaláveis que fazem as marcas se destacarem. Vamos construir algo incrível juntos!"

}
