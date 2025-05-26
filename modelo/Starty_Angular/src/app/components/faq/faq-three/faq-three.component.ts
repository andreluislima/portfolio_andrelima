import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq-three',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './faq-three.component.html',
  styleUrl: './faq-three.component.scss'
})
export class FaqThreeComponent {
  faqData = [
    {
      id:1,
      title:'How does it work ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:2,
      title:' Do I need a designer to use Starty ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:3,
      title:'What do I need to do to start selling ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:4,
      title:'What happens when I receive an order ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
  ]

  activeTab = 1

  onTabClick(index:any){
    this.activeTab = index
  }
}
