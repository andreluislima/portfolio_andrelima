import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqData {
  id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-faq-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './faq-one.component.html',
  styleUrl: './faq-one.component.scss'
})
export class FaqOneComponent {
  faqData:FaqData[] = [
    {
      id:1,
      title:'How does it work ?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:2,
      title:'Do I need a designer to use Starty ? ',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:3,
      title:'What do I need to do to start selling ?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:4,
      title:'Does CMR offer relocation assistance?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:5,
      title:'How is management perceived at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:6,
      title:'How is the work/life balance at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:7,
      title:'What is the salary like at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:8,
      title:'What is a typical working day like at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:9,
      title:'What is the work environment like at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
      id:10,
      title:' What are working conditions like at CMR?',
      desc:'There are many Starty variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
  ]

  activeTab:number = 1

  onTabClick (index:number){
    this.activeTab = index
  }
}
