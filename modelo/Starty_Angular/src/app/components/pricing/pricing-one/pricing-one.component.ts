import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Pricing {
  title: string;
  desc: string;
  amount: string;
  feature: {
      title: string;
      icon: string;
      color: string;
  }[];
}

@Component({
  selector: 'app-pricing-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing-one.component.html',
  styleUrl: './pricing-one.component.scss'
})
export class PricingOneComponent {
  pricing:Pricing[] = [
    {
      title:'Free',
      desc:'For individuals looking for a simple Startys solution',
      amount:'0',
      feature:[
        {
          title:'1 Domains',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'1 GB File upload',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'2 GB Secure storage',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'Unlimited bandwidth',
          icon:'uil uil-times-circle',
          color:'text-danger'
        },
      ]
    },
    {
      title:'Startys',
      desc:'For individuals looking for a simple Startys solution',
      amount:'9',
      feature:[
        {
          title:'5 Domains',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'2 GB File upload',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'20 GB Secure storage',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'Unlimited bandwidth',
          icon:'uil uil-times-circle',
          color:'text-danger'
        },
      ]
    },
    {
      title:'Business',
      desc:'For individuals looking for a simple Startys solution',
      amount:'39',
      feature:[
        {
          title:'10 Domains',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'5 GB File upload',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'50 GB Secure storage',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'Unlimited bandwidth',
          icon:'uil uil-times-circle',
          color:'text-danger'
        },
      ]
    },
    {
      title:'Premium',
      desc:'For individuals looking for a simple Startys solution',
      amount:'99',
      feature:[
        {
          title:'50 Domains',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'10 GB File upload',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'200 GB Secure storage',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
        {
          title:'Unlimited bandwidth',
          icon:'uil uil-check-circle',
          color:'text-success'
        },
      ]
    },
  ]
}
