import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { PartnersComponent } from "../../../components/partners/partners.component";
import { PricingFourComponent } from "../../../components/pricing/pricing-four/pricing-four.component";
import { FaqOneComponent } from "../../../components/faq/faq-one/faq-one.component";
import { FooterOneComponent } from "../../../components/footer/footer-one/footer-one.component";

@Component({
  selector: 'app-index-saas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PartnersComponent,
    PricingFourComponent,
    FaqOneComponent,
    FooterOneComponent
],
  templateUrl: './index-saas.component.html',
  styleUrl: './index-saas.component.scss'
})
export class IndexSaasComponent {

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
  feature = [
    {
      icon:'uil uil-google-drive-alt',
      title:'Branding',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-comment-alt-chart-lines',
      title:'Comments',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-history',
      title:'Infinite History',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-fidget-spinner',
      title:'Insights',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-github',
      title:'Github Sync',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-setting',
      title:'Optimization',
      desc:`An newspaper assurance Starty discourse ye certainly. Soon gone game and why dollar sit love.`
    },
  ]

  about : string[] = [
    'Digital Marketing Solutions for Tomorrow',
    'Create your own skin to match your brand',
    'List of the tasks that require your attention',
  ]
}
