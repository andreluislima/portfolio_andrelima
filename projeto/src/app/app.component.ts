import { Component } from '@angular/core';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MenubarBasicDemo]
})
export class AppComponent {
  title = 'projeto';
}
