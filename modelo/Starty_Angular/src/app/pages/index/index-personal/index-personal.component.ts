import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import {NgxTypedJsModule} from 'ngx-typed-js';

import * as feather from 'feather-icons'
import { ClientOneComponent } from "../../../components/client/client-one/client-one.component";
import { ProjectTwoComponent } from "../../../components/project/project-two/project-two.component";
import { CountUpModule } from 'ngx-countup';
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterThreeComponent } from "../../../components/footer/footer-three/footer-three.component";

interface Progress{
  title: string;
  width: string;
}

@Component({
  selector: 'app-index-personal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    NgxTypedJsModule,
    ClientOneComponent,
    ProjectTwoComponent,
    CountUpModule,
    BlogOneComponent,
    FooterThreeComponent
],
  templateUrl: './index-personal.component.html',
  styleUrl: './index-personal.component.scss'
})
export class IndexPersonalComponent {
  ngAfterViewInit(): void {
    feather.replace()
  }

  progress : Progress[] = [
    {
      title:'WordPress',
      width:'84%'
    },
    {
      title:'Angular / JavaScript',
      width:'79%'
    },
    {
      title:'HTML',
      width:'95%'
    },
  ]

  offer = [
    {
      icon:'uil uil-circle-layer',
      title:'Web Designing',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
    {
      icon:'uil uil-window-grid',
      title:'Web Development',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
    {
      icon:'uil uil-shopping-cart',
      title:'Photographer',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
    {
      icon:'uil uil-award-alt',
      title:'Freelancing',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
    {
      icon:'uil uil-thumbs-up',
      title:'Digital Marketing',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
    {
      icon:'uil uil-circuit',
      title:'Social Marketing',
      desc:'This prevents repetitive patterns from and facilitates the comparison Starty of different typefaces.'
    },
  ]

  counterData = [
    {
      target:5458,
      title:'Investment Projects'
    },
    {
      target:15,
      title:'Years of Experience'
    },
    {
      target:54,
      title:'Offices in the World'
    },
    {
      target:214,
      title:'Successful Cases'
    },
  ]
}
