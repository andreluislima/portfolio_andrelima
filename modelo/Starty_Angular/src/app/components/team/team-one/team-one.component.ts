import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { tns } from 'tiny-slider';

interface ClientData {
  image: string;
  name: string;
  position: string;
}

@Component({
  selector: 'app-team-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CountUpModule
  ],
  templateUrl: './team-one.component.html',
  styleUrl: './team-one.component.scss'
})
export class TeamOneComponent {
  clientData:ClientData[] = [
    {
      image:'assets/images/client/09.jpg',
      name:'Dennis Rosario',
      position:'C.E.O',
    },
    {
      image:'assets/images/client/10.jpg',
      name:'Billy Gregory',
      position:'Manager',
    },
    {
      image:'assets/images/client/11.jpg',
      name:'Connie Dunton',
      position:'Manager',
    },
    {
      image:'assets/images/client/12.jpg',
      name:'Alberta Petty',
      position:'Manager',
    },
    {
      image:'assets/images/client/13.jpg',
      name:'Shirley Garcia',
      position:'Manager',
    },
    {
      image:'assets/images/client/14.jpg',
      name:'Michael Wheeler',
      position:'Manager',
    },
    {
      image:'assets/images/client/15.jpg',
      name:'Dennis Rosario',
      position:'C.E.O',
    },
  ]

  ngAfterViewInit(): void {
    tns({
      container: '.tiny-six-item',
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      speed: 400,
      gutter: 0,
      responsive: {
          1025: {
              items: 6
          },

          992: {
              items: 4
          },

          767: {
              items: 3
          },

          425: {
              items: 2
          },

          375: {
              items: 1
          },
      },
  });
  }

 
}
