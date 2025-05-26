import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import * as feather from 'feather-icons'
import { TeamOneComponent } from "../../components/team/team-one/team-one.component";
import { FooterFiveComponent } from "../../components/footer/footer-five/footer-five.component";
@Component({
  selector: 'app-page-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    TeamOneComponent,
    FooterFiveComponent
],
  templateUrl: './page-team.component.html',
  styleUrl: './page-team.component.scss'
})
export class PageTeamComponent {
  teamData=[
    {
      image:'assets/images/client/09.jpg',
      name:'Dennis Rosario',
      position:'C.E.O',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/10.jpg',
      name:'Billy Gregory',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/11.jpg',
      name:'Connie Dunton',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
    {
      image:'assets/images/client/12.jpg',
      name:'Alberta Petty',
      position:'Manager',
      social:['facebook','instagram','twitter','linkedin']
    },
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

ngAfterViewInit(): void {
  feather.replace()
}
}
