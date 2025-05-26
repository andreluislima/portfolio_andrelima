import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tns } from 'tiny-slider';

interface ClientData{
    image: string;
    name: string;
    position: string;
    desc: string;
}

@Component({
  selector: 'app-client-single-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './client-single-item.component.html',
  styleUrl: './client-single-item.component.scss'
})
export class ClientSingleItemComponent {
  clientData:ClientData[] = [
    {
      image:'assets/images/client/01.jpg',
      name:'Johnny Rosario',
      position:'C.E.O',
      desc:`" The advantage of its Starty Latin origin and the relative Starty meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`
    },
    {
      image:'assets/images/client/02.jpg',
      name:'Gale Larose',
      position:'Manager',
      desc:`" The advantage of its Starty Latin origin and the relative meaninglessness Starty of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`
    },
    {
      image:'assets/images/client/03.jpg',
      name:'Shelly Goodman',
      position:'Manager',
      desc:`" Thus, Lorem Ipsum Starty has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the Starty characteristics of different typefaces. "`
    },
  ]

  ngAfterViewInit(): void {
    tns({
      container: '.tiny-single-item',
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
  });
  }
}
