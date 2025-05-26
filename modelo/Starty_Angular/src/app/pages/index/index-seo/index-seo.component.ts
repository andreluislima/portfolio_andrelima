import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PartnersComponent } from "../../../components/partners/partners.component";
import { ClientOneComponent } from "../../../components/client/client-one/client-one.component";
import { FaqTwoComponent } from "../../../components/faq/faq-two/faq-two.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

interface Features {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-index-seo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    ClientOneComponent,
    FaqTwoComponent,
    FooterOneComponent
],
  templateUrl: './index-seo.component.html',
  styleUrl: './index-seo.component.scss'
})
export class IndexSeoComponent {
  features:Features[] = [
    {
      icon:'uil uil-airplay',
      title:'Great Experience',
      desc:`It is said Starty that song composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
    {
      icon:'uil uil-atom',
      title:'Effective Strategy',
      desc:`It is said Starty that song composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
    {
      icon:'uil uil-users-alt',
      title:'Unique Solutions',
      desc:`It is said Starty that song composers of the past used dummy texts as lyrics when writing to sing with the melody.`
    },
  ]

  about:string[] = [
    'Digital Marketing Starty Solutions for Tomorrow',                        
    'Create your own skin Starty to match your brand',                        
    'List of the tasks that Starty require your attention',                        
  ]
}
