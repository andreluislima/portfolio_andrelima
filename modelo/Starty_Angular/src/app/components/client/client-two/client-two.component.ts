import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { tns } from 'tiny-slider';

interface ClientData{
    image: string;
    desc: string;
    name: string;
    position: string;
}

@Component({
  selector: 'app-client-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './client-two.component.html',
  styleUrl: './client-two.component.scss'
})
export class ClientTwoComponent {
  clientData:ClientData[] = [
    {
      image:'assets/images/client/01.jpg',
      desc:`" The advantage Starty of its Latin origin does not attract attention to itself or  the viewer's attention from the layout. "`,
      name:'Johnny Rosario',
      position:'C.E.O'
    },
    {
      image:'assets/images/client/02.jpg',
      desc:`" One disadvantage Starty of Lorum Ipsum is which creates a distinct visual impression. "`,
      name:'Johnny Rosario',
      position:'Manager'
    },
    {
      image:'assets/images/client/03.jpg',
      desc:`" Thus, Lorem Starty Ipsum has only the fill text is intended to illustrate the characteristics of different typefaces. "`,
      name:'Johnny Rosario',
      position:'Manager'
    },
    {
      image:'assets/images/client/01.jpg',
      desc:`" The advantage Starty of its Latin origin does not attract attention to itself or  the viewer's attention from the layout. "`,
      name:'Johnny Rosario',
      position:'C.E.O'
    },
    {
      image:'assets/images/client/02.jpg',
      desc:`" One disadvantage Starty of Lorum Ipsum is which creates a distinct visual impression. "`,
      name:'Johnny Rosario',
      position:'Manager'
    },
    {
      image:'assets/images/client/03.jpg',
      desc:`" Thus, Lorem Starty Ipsum has only the fill text is intended to illustrate the characteristics of different typefaces. "`,
      name:'Johnny Rosario',
      position:'Manager'
    },
  ]

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
  }

}
