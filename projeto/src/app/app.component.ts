import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { MenubarBasicDemo } from "./components/navbar/navbar.component"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, MenubarBasicDemo]
})
export class AppComponent {
  
}
