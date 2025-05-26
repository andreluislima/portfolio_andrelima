import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-app',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    
  ],
  templateUrl: './mobile-app.component.html',
  styleUrl: './mobile-app.component.scss'
})
export class MobileAppComponent {

}
