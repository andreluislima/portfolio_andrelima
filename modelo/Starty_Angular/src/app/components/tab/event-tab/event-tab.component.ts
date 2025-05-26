import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-tab',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './event-tab.component.html',
  styleUrl: './event-tab.component.scss'
})
export class EventTabComponent {
  eventOne = [
    {
      time:'10:00AM - 12:00PM',
      image:'assets/images/events/1.jpg',
      title:'Digital Conference Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Calvin'
    },
    {
      time:'12:30PM - 01:00PM',
      image:'assets/images/events/2.jpg',
      title:'Conference On User Interface',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Cristina'
    },
    {
      time:'02:00PM - 03:30PM',
      image:'assets/images/events/3.jpg',
      title:'Business World Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Murfhy'
    },
    {
      time:'04:00PM - 05:30PM',
      image:'assets/images/events/5.jpg',
      title:'Business Conference for professional',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Ganalia'
    },
  ]
  eventTwo = [
    {
      time:'10:00AM - 12:00PM',
      image:'assets/images/events/5.jpg',
      title:'Digital Conference Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Calvin'
    },
    {
      time:'12:30PM - 01:00PM',
      image:'assets/images/events/6.jpg',
      title:'Conference On User Interface',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Cristina'
    },
    {
      time:'02:00PM - 03:30PM',
      image:'assets/images/events/7.jpg',
      title:'Business World Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Murfhy'
    },
    {
      time:'04:00PM - 05:30PM',
      image:'assets/images/events/8.jpg',
      title:'Business Conference for professional',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Ganalia'
    },
  ]
  eventThree = [
    {
      time:'10:00AM - 12:00PM',
      image:'assets/images/events/9.jpg',
      title:'Digital Conference Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Calvin'
    },
    {
      time:'12:30PM - 01:00PM',
      image:'assets/images/events/10.jpg',
      title:'Conference On User Interface',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Cristina'
    },
    {
      time:'02:00PM - 03:30PM',
      image:'assets/images/events/11.jpg',
      title:'Business World Event Intro',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Murfhy'
    },
    {
      time:'04:00PM - 05:30PM',
      image:'assets/images/events/12.jpg',
      title:'Business Conference for professional',
      desc:`The most well-known Starty dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century`,
      name:'by Ganalia'
    },
  ]
}
