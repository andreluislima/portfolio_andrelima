import { Component } from '@angular/core';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";
import { IndexComponent } from "./pages/index/index/index.component";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [MenubarBasicDemo, IndexComponent]
})
export class AppComponent {
  title = 'projeto';
}
