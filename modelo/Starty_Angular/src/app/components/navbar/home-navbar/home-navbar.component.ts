import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.scss'
})
export class HomeNavbarComponent {
  scroll:boolean = false
  @Input() currentSection:any

  @HostListener("window:scroll",[])

  onHandleScroll(){
      if (window.scrollY > 100) {
        this.scroll = true
    }
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
