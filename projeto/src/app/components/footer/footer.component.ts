import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footer = ['home', 'resume', 'project', 'contact'];

  nome = "Lima Dev Solutions";
  currentYear: number = new Date().getFullYear();

}
