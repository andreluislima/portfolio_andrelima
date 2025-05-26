import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";

import * as feather from 'feather-icons'
import { FinanceTabComponent } from "../../../components/tab/finance-tab/finance-tab.component";
import { CountUpModule } from 'ngx-countup';
import { TeamTwoComponent } from "../../../components/team/team-two/team-two.component";
import { FooterFourComponent } from "../../../components/footer/footer-four/footer-four.component";

interface AbouData {
  icon: string;
  title: string;
  desc: string;
}

interface CounterData {
  title: string;
  value: number;
}

interface ProcessData{
    id: number;
    title: string;
    desc: string;
    process: boolean;
}

interface CtaData{
    title: string;
    width: string;
}

@Component({
  selector: 'app-index-finance',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FinanceTabComponent,
    CountUpModule,
    TeamTwoComponent,
    FooterFourComponent
],
  templateUrl: './index-finance.component.html',
  styleUrl: './index-finance.component.scss'
})
export class IndexFinanceComponent {
  
  ngAfterViewInit(): void {
    feather.replace()
  }

  abouData:AbouData[] = [
    {
      icon:'uil uil-airplay',
      title:'Flexible solutions',
      desc:`An newspaper Starty assurance discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-eye',
      title:'Team Work',
      desc:`An newspaper Starty assurance discourse ye certainly. Soon gone game and why dollar sit love.`
    },
    {
      icon:'uil uil-tachometer-fast-alt',
      title:'Best Pricing',
      desc:`An newspaper Starty assurance discourse ye certainly. Soon gone game and why dollar sit love.`
    },
  ]

  counterData:CounterData[]= [
    {
      title:'Investment Projects',
      value:5458
    },
    {
      title:'Years of Experience',
      value:15
    },
    {
      title:'Offices in the World',
      value:54
    },
    {
      title:'Successful Cases',
      value:214
    },
  ]

   processData:ProcessData[] = [
    {
      id:1,
      title:'Concept',
      desc:'Write a short description, that Starty will describe the title or something informational and useful.',
      process:true
    },
    {
      id:2,
      title:'Development',
      desc:'Write a short description, that Starty will describe the title or something informational and useful.',
      process:true
    },
    {
      id:3,
      title:'Finish process',
      desc:'Write a short description, that Starty will describe the title or something informational and useful.',
      process:false
    },
   ]

   ctaData:CtaData[] = [
    {
      title:'Research',
      width:'84%'
    },
    {
      title:'Sales & Trading',
      width:'75%'
    },
    {
      title:'Investment',
      width:'79%'
    },
    {
      title:'Finance',
      width:'95%'
    },
   ]

   blogData = [
    {
      image:'assets/images/blog/06.jpg',
      category:'Corporate',
      title:'Building Your Corporate Identity from Starty',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      image:'assets/images/blog/07.jpg',
      category:'Branding',
      title:'The Dark Side of Overnight Success',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
    {
      image:'assets/images/blog/08.jpg',
      category:'Technology',
      title:'The Right Hand of Business IT World',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`
    },
   ]

   
  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
