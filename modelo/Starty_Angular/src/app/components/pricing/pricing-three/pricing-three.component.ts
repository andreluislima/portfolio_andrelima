import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PricingData{
  title: string;
  value: string;
  feature: string[];
  btn: string;
  btnStyle: string;
}

@Component({
  selector: 'app-pricing-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing-three.component.html',
  styleUrl: './pricing-three.component.scss'
})
export class PricingThreeComponent {
  pricingData : PricingData[] = [
    {
      title:'Starter',
      value:'39',
      feature:[
        '1 User','Unlimited Projects','Download Prototypes','Enhanced Security'
      ],
      btn:'Get Started',
      btnStyle:'btn btn-primary mt-4'
    },
    {
      title:'Professional',
      value:'59',
      feature:[
        '10 User','Unlimited Projects','Download Prototypes','Enhanced Security'
      ],
      btn:'Try it now',
      btnStyle:'btn btn-soft-primary mt-4'
    },
  ]
}
