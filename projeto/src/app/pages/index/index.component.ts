import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { SocialMediasComponent } from "../../components/social-medias/social-medias.component";

@Component({
  selector: 'app-index',
  imports: [CommonModule, HeroSectionComponent, SocialMediasComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  skills = ["design", "development", "marketing"]
  buttons = ['resume', 'projects']

  title='';
  private fullText = "Hi there!\n I,m Andre Lima\n Web Developer";
  private i = 0

  ngOnInit(){
    this.writeText();
  }

  writeText() {
     if (this.i < this.fullText.length) {
      const char = this.fullText.charAt(this.i) === '\n' ? '<br>' : this.fullText.charAt(this.i);
      this.title += char;
      this.i++;
      setTimeout(() => this.writeText(), 100);
    }
  

  }


}
