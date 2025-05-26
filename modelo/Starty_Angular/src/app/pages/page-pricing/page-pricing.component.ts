import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { PricingFiveComponent } from "../../components/pricing/pricing-five/pricing-five.component";
import { PricingTwoComponent } from "../../components/pricing/pricing-two/pricing-two.component";
import { FooterFiveComponent } from "../../components/footer/footer-five/footer-five.component";

@Component({
  selector: 'app-page-pricing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    PricingFiveComponent,
    PricingTwoComponent,
    FooterFiveComponent
],
  templateUrl: './page-pricing.component.html',
  styleUrl: './page-pricing.component.scss'
})
export class PagePricingComponent {
  pricingData = [
    {
      title:'1 Day Subscribe',
      subTitle:'One day payments',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      amount:'$5.00',
      btn:'btn btn-lg btn-soft-primary'
    },
    {
      title:'1 Month Plan',
      subTitle:'Monthly payments',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      amount:'$45.00',
      btn:'btn btn-lg btn-primary'
    },
    {
      title:'1 Year Plan',
      subTitle:'Yearly payments',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      amount:'$295.00',
      btn:'btn btn-lg btn-soft-primary'
    },
  ]
}
