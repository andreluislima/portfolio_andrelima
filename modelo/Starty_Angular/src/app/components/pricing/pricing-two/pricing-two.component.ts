import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PricingData{
  amount: number;
  title: string;
  feature: string[];
  btn: string;
}

@Component({
  selector: 'app-pricing-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing-two.component.html',
  styleUrl: './pricing-two.component.scss'
})
export class PricingTwoComponent {
  pricingData:PricingData[] = [
    {
      amount:9,
      title:'Personal',
      feature:[
        'Number of People 1 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security'
      ],
      btn:'btn btn-light'
    },
    {
      amount:39,
      title:'Business',
      feature:[
        'Number of People 1 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security'
      ],
      btn:'btn btn-primary'
    },
    {
      amount:59,
      title:'Enterprise',
      feature:[
        'Number of People 1 Person',
        'Unlimited Projects',
        'Club Access Unlimited Access',
        'Class Access Fitness Classes',
        'Enhanced Security'
      ],
      btn:'btn btn-light'
    },
  ]
}
