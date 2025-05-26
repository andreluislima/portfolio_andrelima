import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing-four',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './pricing-four.component.html',
  styleUrl: './pricing-four.component.scss'
})
export class PricingFourComponent {
  pricingData = [
    {
      title:'Free',
      value:'0',
      desc:'For individuals looking for a simple Startups solution',
      features: [
        {
          icon:'uil uil-check-circle',
          title:'1 Domains'
        },
        {
          icon:'uil uil-check-circle',
          title:'1 GB File upload'
        },
        {
          icon:'uil uil-check-circle',
          title:'2 GB Secure storage'
        },
        {
          icon:'uil uil-times-circle',
          title:'Unlimited bandwidth'
        },
      ],
      btn:'Get Start Free',
      tag:false
    },
    {
      title:'Startups',
      value:'9',
      desc:'For individuals looking for a simple Startups solution',
      features: [
        {
          icon:'uil uil-check-circle',
          title:'5 Domains'
        },
        {
          icon:'uil uil-check-circle',
          title:'2 GB File upload'
        },
        {
          icon:'uil uil-check-circle',
          title:'20 GB Secure storage'
        },
        {
          icon:'uil uil-check-circle',
          title:'Custom Views'
        },
        {
          icon:'uil uil-check-circle',
          title:'Advanced Reports'
        },
        {
          icon:'uil uil-times-circle',
          title:'Unlimited bandwidth'
        },
      ],
      btn:'Free for 14 Days',
      tag:true
    },
    {
      title:'FrBusinessee',
      value:'49',
      desc:'For individuals looking for a simple Startups solution',
      features: [
        {
          icon:'uil uil-check-circle',
          title:'10 Domains'
        },
        {
          icon:'uil uil-check-circle',
          title:'5 GB File upload'
        },
        {
          icon:'uil uil-check-circle',
          title:'50 GB Secure storage'
        },
        {
          icon:'uil uil-check-circle',
          title:'Custom Permissions'
        },
        {
          icon:'uil uil-check-circle',
          title:'Unlimited bandwidth'
        },
      ],
      btn:'Contact with us',
      tag:false
    },
  ]
}
