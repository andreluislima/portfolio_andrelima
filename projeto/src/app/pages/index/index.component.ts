import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { PresentationComponent } from "../../components/presentation/presentation.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-index',
  imports: [CommonModule, HeroSectionComponent, PresentationComponent,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  skills = ["design", "development", "marketing"]
  buttons = ['resume', 'projects']

  title='';
  private fullText = "Olá!\n Eu sou Andre Lima\n Desenvolvedor Web";
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


  // inicio da criacao do filtro de skills
  projectsFilters(skill:string){
    
  }

}
