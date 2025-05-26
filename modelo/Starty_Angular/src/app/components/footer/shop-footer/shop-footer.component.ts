import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Social {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-shop-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './shop-footer.component.html',
  styleUrl: './shop-footer.component.scss'
})

export class ShopFooterComponent {
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

  linkOne = [
    'Men','Jackets & Coats','Jeans','Loungewear','Polo shirts','Shirts'
  ]
  linkTwo = [
    'Shorts','Suits Swimwear','T-shirts','Tracksuits','Trousers','Shirts'
  ]
  linkThree = [
    'My account','Order History','Wish List','Newsletter','Affiliate','Returns'
  ]

  feature = [
    {
      icon:'uil uil-truck',
      title:'Free delivery'
    },
    {
      icon:'uil uil-archive',
      title:'Non-contact shipping'
    },
    {
      icon:'uil uil-transaction',
      title:'Money-back quarantee'
    },
    {
      icon:'uil uil-shield-check',
      title:'Secure payments'
    },
  ]

  year :any 
  
  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }
}
