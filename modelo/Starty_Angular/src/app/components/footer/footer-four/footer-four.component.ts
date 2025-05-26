import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Social {
  icon: string;
  link: string;
}

interface LinkOne {
  link: string;
  title: string;
}
interface LinkTwo {
  link: string;
  title: string;
}


@Component({
  selector: 'app-footer-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-four.component.html',
  styleUrl: './footer-four.component.scss'
})
export class FooterFourComponent {
  @Input() signup:any
  year:any 
  
  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  social : Social[] = [
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
      link:'https://www.instagram.com/shreethemes'
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
      link:'https://forms.gle/QkTueCikDGqJnbky9'
    },
  ]

  linkOne :LinkOne[] = [
    {
      link:'/page-aboutus',
      title:'About us'
    },
    {
      link:'/page-services-two',
      title:'Services'
    },
    {
      link:'/page-team',
      title:'Team'
    },
    {
      link:'/page-pricing',
      title:'Pricing'
    },
    {
      link:'portfolio-detail-four',
      title:'Project'
    },
    {
      link:'blog-grid',
      title:'Blog'
    },
  ]

  linkTwo : LinkTwo[] = [
    {
      link:'/',
      title:'Terms of Services'
    },
    {
      link:'/',
      title:'Privacy Policy'
    },
    {
      link:'/page-contact',
      title:'Contact Us'
    },
    {
      link:'/',
      title:'Changelog'
    },
    {
      link:'/components',
      title:'Components'
    },
  ]
}
