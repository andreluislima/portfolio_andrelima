import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TeamData {
    image: string;
    name: string;
    position: string;
    social: string[];
}

@Component({
  selector: 'app-team-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './team-two.component.html',
  styleUrl: './team-two.component.scss'
})
export class TeamTwoComponent {
  teamData : TeamData[] = [
    {
      image:'assets/images/client/13.jpg',
      name:'Dennis Rosario',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/14.jpg',
      name:'Billy Gregory',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/15.jpg',
      name:'Connie Dunton',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/16.jpg',
      name:'Alberta Petty',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
  ]
}
