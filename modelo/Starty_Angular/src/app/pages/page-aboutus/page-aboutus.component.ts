import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { ClientSingleItemComponent } from "../../components/client/client-single-item/client-single-item.component";
import { PartnersComponent } from "../../components/partners/partners.component";
import { TeamOneComponent } from "../../components/team/team-one/team-one.component";
import { CountUpModule } from 'ngx-countup';
import { FooterFiveComponent } from "../../components/footer/footer-five/footer-five.component";


interface feature { 
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-page-aboutus',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ClientSingleItemComponent,
    PartnersComponent,
    TeamOneComponent,
    CountUpModule,
    FooterFiveComponent
],
  templateUrl: './page-aboutus.component.html',
  styleUrl: './page-aboutus.component.scss'
})
export class PageAboutusComponent {
  about:string[] = [
    'Beautiful and easy to understand animations',
    'Our Talented & Experienced Marketing Agency',
    'Theme advantages are pixel perfect design'
  ]

  feature:feature[] = [
    {
      icon:'uil uil-airplay',
      title:'Developing strategy',
      desc:`It is said that song Starty composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
    {
      icon:'uil uil-atom',
      title:'Blazing performance',
      desc:`It is said that song Starty composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
    {
      icon:'uil uil-users-alt',
      title:'Customer satisfaction',
      desc:`It is said that song Starty composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
  ]

  counterData = [
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
  
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
