import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FinanceTabComponent } from "../../../components/tab/finance-tab/finance-tab.component";
import { CountUpModule } from 'ngx-countup';
import { ClientSingleItemComponent } from "../../../components/client/client-single-item/client-single-item.component";
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface Services{
  icon: string;
  title: string;
  desc: string;
  id:number
}

interface Counter {
    title: string;
    value: number;
}

@Component({
  selector: 'app-page-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FinanceTabComponent,
    CountUpModule,
    ClientSingleItemComponent,
    BlogOneComponent,
    FooterFiveComponent
],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.scss'
})
export class PageServicesComponent {
  services:Services[] = [
    {
      id:1,
      icon:'uil uil-circle-layer',
      title:'Pixel Perfect Design',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
    {
      id:2,
      icon:'uil uil-window-grid',
      title:'Unlimited Layouts',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
    {
      id:3,
      icon:'uil uil-shopping-cart',
      title:'Online Shopping',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
    {
      id:4,
      icon:'uil uil-award-alt',
      title:'Simple and Secure',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
    {
      id:5,
      icon:'uil uil-thumbs-up',
      title:'Automatic Updates',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
    {
      id:6,
      icon:'uil uil-circuit',
      title:'No Rocket Science',
      desc:'This prevents starty repetitive patterns from and facilitates the comparison of different typefaces.'
    },
  ]

  counter:Counter[] = [
    {
      title:'Investment Projects',
      value:5458
    },
    {
      title:'Years of Experience',
      value:15
    },
    {
      title:'Offices in the World',
      value:54
    },
    {
      title:'Successful Cases',
      value:214
    },
  ]
}
