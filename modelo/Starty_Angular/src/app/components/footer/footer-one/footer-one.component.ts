import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollToTopComponent } from "../../scroll-to-top/scroll-to-top.component";

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

interface linkThree {
  link: string;
  title: string;
}

@Component({
  selector: 'app-footer-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ScrollToTopComponent
],
  templateUrl: './footer-one.component.html',
  styleUrl: './footer-one.component.scss'
})
export class FooterOneComponent {
  @Input() top:any

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

  linkThree :linkThree[] = [
    {
      link:'/page-faqs',
      title:'Theme guide'
    },
    {
      link:'/page-faqs',
      title:'Support desk'
    },
    {
      link:'/page-services',
      title:'What we offer'
    },
    {
      link:'/page-aboutus',
      title:'Company history'
    },
  ]

  year :any 
  
  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }
}
