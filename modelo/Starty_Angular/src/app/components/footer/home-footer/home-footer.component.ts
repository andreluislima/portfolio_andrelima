import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.scss'
})
export class HomeFooterComponent {
  year:any
  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

  social = [
    {
      icon:'uil uil-shopping-cart align-middle',
      link:'https://1.envato.market/starty-angular'
    },
    {
      icon:'uil uil-dribbble align-middle',
      link:'https://dribbble.com/shreethemes'
    },
    {
      icon:'uil uil-behance',
      link:'https://www.behance.net/shreethemes'
    },
    {
      icon:'uil uil-linkedin',
      link:'http://linkedin.com/company/shreethemes'
    },
    {
      icon:'uil uil-facebook-f align-middle',
      link:'https://www.facebook.com/shreethemes'
    },
    {
      icon:'uil uil-instagram align-middle',
      link:'https://www.instagram.com/shreethemes/'
    },
    {
      icon:'uil uil-twitter align-middle',
      link:'https://twitter.com/shreethemes'
    },
    {
      icon:'uil uil-envelope align-middle',
      link:'mailto:support@shreethemes.in'
    },
    {
      icon:'uil uil-file align-middle',
      link:'https://forms.gle/QkTueCikDGqJnbky9',
    },
  
  ]
}
