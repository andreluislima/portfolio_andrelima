import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import {tns} from 'tiny-slider'

interface ProjectData {
    image: string;
    title: string;
    subTitle: string;
}

@Component({
  selector: 'app-project-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LightgalleryModule
  ],
  templateUrl: './project-one.component.html',
  styleUrl: './project-one.component.scss'
})
export class ProjectOneComponent {
  projectData:ProjectData[] = [
    {
      image:'assets/images/portfolio/01.jpg',
      title:'The Leaf and Letter',
      subTitle:'Branding'
    },
    {
      image:'assets/images/portfolio/02.jpg',
      title:'The Papers',
      subTitle:'Designing'
    },
    {
      image:'assets/images/portfolio/03.jpg',
      title:'The Headphones',
      subTitle:'Photography'
    },
    {
      image:'assets/images/portfolio/04.jpg',
      title:'The Projects',
      subTitle:'Development'
    },
    {
      image:'assets/images/portfolio/05.jpg',
      title:'The Cup of Coffee',
      subTitle:'Branding'
    },
    {
      image:'assets/images/portfolio/06.jpg',
      title:'The Pen and Books',
      subTitle:'Designing'
    },
    {
      image:'assets/images/portfolio/07.jpg',
      title:'The Leaf and Books',
      subTitle:'Development'
    },
    {
      image:'assets/images/portfolio/08.jpg',
      title:'The Leaf and Letter',
      subTitle:'Branding'
    },
    {
      image:'assets/images/portfolio/09.jpg',
      title:'The Cactus Plant',
      subTitle:'Branding'
    },
  ]

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    tns({
      container: '.tiny-five-item',
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
          1025: {
              items: 5
          },

          992: {
              items: 4
          },

          767: {
              items: 2
          },

          320: {
              items: 1
          },
      },
  });
  }
}
