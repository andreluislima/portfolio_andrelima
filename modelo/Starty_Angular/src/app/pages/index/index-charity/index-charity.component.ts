import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import * as feather from 'feather-icons'
import { tns } from 'tiny-slider';
import { TeamTwoComponent } from "../../../components/team/team-two/team-two.component";
import { CharityFooterComponent } from "../../../components/footer/charity-footer/charity-footer.component";

interface Causes {
  image: string;
  title: string;
  desc: string;
  rais: number;
  value: number;
  goal: number;
}

interface BlogData {
    image: string;
    title: string;
    desc: string;
    tag: string;
}

@Component({
  selector: 'app-index-charity',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TeamTwoComponent,
    CharityFooterComponent
],
  templateUrl: './index-charity.component.html',
  styleUrl: './index-charity.component.scss'
})
export class IndexCharityComponent {

  slider:any
  ngAfterViewInit(): void {
    tns({
      container: '.tiny-three-item',
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      speed: 400,
      gutter: 12,
      responsive: {
          992: {
              items: 3
          },
    
          767: {
              items: 2
          },
    
          320: {
              items: 1
          },
      },
    });
    feather.replace()
  }

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  causes:Causes[] = [
    {
      image:'assets/images/charity/cause01.jpg',
      title:'Donate For Food',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
    {
      image:'assets/images/charity/cause02.jpg',
      title:'Health and Rights',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
    {
      image:'assets/images/charity/cause03.jpg',
      title:'Food For Orphan',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
    {
      image:'assets/images/charity/cause04.jpg',
      title:'Home For Homeless',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
    {
      image:'assets/images/charity/cause05.jpg',
      title:'Holyday Gifts In Kind',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
    {
      image:'assets/images/charity/cause06.jpg',
      title:'For clean Water in Africa',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', in the 16th century.`,
      rais:600000,
      value:100000,
      goal:1000000
    },
  ]

  aboutData = [
    {
      icon:'uil uil-book-open',
      title:'Educations',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-cube',
      title:'Hospitality',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-airplay',
      title:'Homeless',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-illustration',
      title:'Blood Donate',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-mobile-android',
      title:'Poverty',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-cube',
      title:'Risk',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
    {
      icon:'uil uil-airplay',
      title:'Rescue',
      desc:'The advantage of Starty its Latin origin and the relative'
    },
  ]

  blogData:BlogData[] =[
    {
      image:'assets/images/charity/news01.jpg',
      title:'Helping Kids Grow Up Stonger',
      desc:`The most Starty well-known dummy text is the 'Lorem Ipsum', in the 16th century.`,
      tag:'Home'
    },
    {
      image:'assets/images/charity/news02.jpg',
      title:'Pure Water More Essential',
      desc:`The most Starty well-known dummy text is the 'Lorem Ipsum', in the 16th century.`,
      tag:'Water'
    },
    {
      image:'assets/images/charity/news03.jpg',
      title:'Education for African Children',
      desc:`The most Starty well-known dummy text is the 'Lorem Ipsum', in the 16th century.`,
      tag:'Educations'
    },
  ]
}
