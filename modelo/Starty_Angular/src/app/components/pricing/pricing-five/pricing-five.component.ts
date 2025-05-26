import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PricingData {
  title: string;
  amount: string;
  feature: string[];
  btnText: string;
  btn: string;
  bg: boolean;
}

@Component({
  selector: 'app-pricing-five',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing-five.component.html',
  styleUrl: './pricing-five.component.scss'
})
export class PricingFiveComponent {
  pricingData:PricingData[] = [
    {
      title:'FREE',
      amount:'0',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      btnText:'Free',
      btn:'btn btn-lg btn-primary',
      bg:false
    },
    {
      title:'STARTER',
      amount:'39',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      btnText:'Start Now',
      btn:'btn btn-lg btn-light',
      bg:true
    },
    {
      title:'PROFESSIONAL',
      amount:'59',
      feature:[
        'Number of People 01 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security',
      ],
      btnText:'Update Now',
      btn:'btn btn-lg btn-primary',
      bg:false
    },
  ]

}
