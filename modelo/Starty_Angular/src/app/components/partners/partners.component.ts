import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  images:string[] = [
    'assets/images/client/logo-1.svg',
    'assets/images/client/logo-2.svg',
    'assets/images/client/logo-3.svg',
    'assets/images/client/logo-4.svg',
    'assets/images/client/logo-5.svg',
    'assets/images/client/logo-6.svg',
  ]

 
}
