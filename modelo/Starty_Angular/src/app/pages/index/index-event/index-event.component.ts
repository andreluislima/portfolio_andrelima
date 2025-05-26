import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { TeamOneComponent } from "../../../components/team/team-one/team-one.component";
import { CountUpModule } from 'ngx-countup';
import { EventTabComponent } from "../../../components/tab/event-tab/event-tab.component";
import { PricingTwoComponent } from "../../../components/pricing/pricing-two/pricing-two.component";
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterTwoComponent } from "../../../components/footer/footer-two/footer-two.component";

interface EventProcess{
  icon: string;
  title: string;
  desc: string;
  bar: boolean;
}
@Component({
  selector: 'app-index-event',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TeamOneComponent,
    CountUpModule,
    EventTabComponent,
    PricingTwoComponent,
    BlogOneComponent,
    FooterTwoComponent
],
  templateUrl: './index-event.component.html',
  styleUrl: './index-event.component.scss'
})
export class IndexEventComponent {

  countdownDate: Date = new Date('September 13, 2025 6:0:0');
  days: number = 0
  hours: number = 0
  minutes: number =0
  seconds: number = 0

  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      this.calculateTime();
    }, 1000);
  }
  calculateTime() {
    const now = new Date().getTime();
    const difference = this.countdownDate.getTime() - now;
    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

  eventProcess:EventProcess[] = [
    {
      icon:'uil uil-ankh',
      title:'Conferences',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:true
    },
    {
      icon:'uil uil-airplay',
      title:'Webinars',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:true
    },
    {
      icon:'uil uil-user',
      title:'Virtual Classes',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:false
    },
  ]

  counterData = [
    {
      target:12,
      title:'SPEAKERS'
    },
    {
      target:18,
      title:'SPONSORS'
    },
    {
      target:8,
      title:'WORKSHOPS'
    },
  ]

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
