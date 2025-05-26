import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './single-navbar.component.html',
  styleUrl: './single-navbar.component.scss'
})
export class SingleNavbarComponent {
  scroll:boolean = false
  @Input() currentSection:any
  @HostListener("window:scroll",[])

  onHandleScroll(){
    if (window.scrollY > 100) {
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
