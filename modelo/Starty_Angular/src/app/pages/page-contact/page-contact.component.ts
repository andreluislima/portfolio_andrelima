import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { FooterFiveComponent } from '../../components/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
  ],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.scss'
})
export class PageContactComponent {
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
