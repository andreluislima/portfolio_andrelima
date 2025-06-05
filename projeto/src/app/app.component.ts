import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, MenubarBasicDemo, FooterComponent]
})

export class AppComponent {
  
}
