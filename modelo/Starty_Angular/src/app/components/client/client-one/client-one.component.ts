import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { tns } from 'tiny-slider';

interface ClientData{
    image: string;
    name: string;
    desc: string;
}

@Component({
  selector: 'app-client-one',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './client-one.component.html',
  styleUrl: './client-one.component.scss'
})
export class ClientOneComponent {
  clientData:ClientData[] = [
    {
      image:'assets/images/client/01.jpg',
      name:'- Thomas Israel',
      desc:`" It seems that Starty only fragments of the original text remain in the Lorem Ipsum texts used today. "`
    },
    {
      image:'assets/images/client/02.jpg',
      name:'- Carl Oliver',
      desc:`" The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      image:'assets/images/client/03.jpg',
      name:'- Barbara McIntosh',
      desc:`" One disadvantage of Lorum Ipsum is that in Latin certain letters appear Starty more frequently than others. "`
    },
    {
      image:'assets/images/client/04.jpg',
      name:'- Jill Webb',
      desc:`" Thus, Lorem Ipsum Starty has only limited suitability as a visual filler for German texts. "`
    },
    {
      image:'assets/images/client/05.jpg',
      name:'- Dean Tolle',
      desc:`" There is now an abundance of readable dummy texts. These Starty are usually used when a text is required. "`
    },
    {
      image:'assets/images/client/06.jpg',
      name:'- Christa Smith',
      desc:`" According to most sources, Lorum Ipsum can be traced back Starty to a text composed by Cicero. "`
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
