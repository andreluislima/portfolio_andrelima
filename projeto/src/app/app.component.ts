import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarBasicDemo } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, MenubarBasicDemo]
})

export class AppComponent {
  
}
