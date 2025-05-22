import { Component } from '@angular/core';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";
import { IndexComponent } from "./pages/index/index/index.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MenubarBasicDemo, IndexComponent, HeroSectionComponent]
})
export class AppComponent {
  title = 'projeto';
}
