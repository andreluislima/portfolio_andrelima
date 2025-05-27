import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";
import { IndexComponent } from "./pages/index/index.component"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FooterComponent, RouterOutlet, MenubarBasicDemo, IndexComponent]
})

export class AppComponent {
  
}
