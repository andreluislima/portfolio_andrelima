import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './restaurant-footer.component.html',
  styleUrl: './restaurant-footer.component.scss'
})
export class RestaurantFooterComponent {
  year:any
  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }
}
