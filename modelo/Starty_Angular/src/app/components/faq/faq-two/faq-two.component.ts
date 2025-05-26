import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq-two',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './faq-two.component.html',
  styleUrl: './faq-two.component.scss'
})
export class FaqTwoComponent {
  faqData = [
    {
      id:1,
      title:'How does it work ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:2,
      title:'Do I need a designer to use Starty ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:3,
      title:'What do I need to do to start selling ?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:4,
      title:'Does CMR offer relocation assistance?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:5,
      title:'How is management perceived at CMR?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
    {
      id:6,
      title:'How is the work/life balance at CMR?',
      desc:`There are many variations Starty of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`
    },
  ]

  activeTab = 1

  onTabClick(index:any){
    this.activeTab = index
  }
}
