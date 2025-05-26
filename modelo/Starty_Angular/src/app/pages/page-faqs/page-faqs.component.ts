import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { PricingFiveComponent } from "../../components/pricing/pricing-five/pricing-five.component";
import { FaqThreeComponent } from "../../components/faq/faq-three/faq-three.component";
import { FooterFiveComponent } from "../../components/footer/footer-five/footer-five.component";

@Component({
  selector: 'app-page-faqs',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PricingFiveComponent,
    FaqThreeComponent,
    FooterFiveComponent
],
  templateUrl: './page-faqs.component.html',
  styleUrl: './page-faqs.component.scss'
})
export class PageFaqsComponent {

}
