import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Social {
  link: string;
  icon: string;
}

interface Link{
    link: string;
    title: string;
}

@Component({
  selector: 'app-footer-six',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-six.component.html',
  styleUrl: './footer-six.component.scss'
})
export class FooterSixComponent {
year:any

ngOnInit(): void {
  this.year = new Date().getFullYear();
}

social :Social[]= [
  {
    link:'https://1.envato.market/starty-angular',
    icon:'uil uil-shopping-cart align-middle'
  },
  {
    link:'https://dribbble.com/shreethemes',
    icon:'uil uil-dribbble align-middle'
  },
  {
    link:'https://www.behance.net/shreethemes',
    icon:'uil uil-behance'
  },
  {
    link:'http://linkedin.com/company/shreethemes',
    icon:'uil uil-linkedin'
  },
  {
    link:'https://www.facebook.com/shreethemes',
    icon:'uil uil-facebook-f align-middle'
  },
  {
    link:'https://www.instagram.com/shreethemes',
    icon:'uil uil-instagram align-middle'
  },
  {
    link:'https://twitter.com/shreethemes',
    icon:'uil uil-twitter align-middle'
  },
  {
    link:'mailto:support@shreethemes.in',
    icon:'uil uil-envelope align-middle'
  },
  {
    link:'https://forms.gle/QkTueCikDGqJnbky9',
    icon:'uil uil-file align-middle'
  },
]

link1:Link[] = [
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
    link:'/portfolio-detail-four',
    title:'Project'
  },
  {
    link:'/blog-grid',
    title:'Blog'
  },
]

link2:Link[] = [
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
    link:'/page-pricing',
    title:'Pricing'
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
