import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";
@Component({
  selector: 'app-index',
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  skills = ["design", "development", "marketing"]
  title = "Design. Desenvolvimento. Resultados."

}
