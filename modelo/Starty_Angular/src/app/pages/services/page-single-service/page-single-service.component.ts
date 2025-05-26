import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";

interface Ability{
  title: string;
  width: string;
}

@Component({
  selector: 'app-page-single-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent
],
  templateUrl: './page-single-service.component.html',
  styleUrl: './page-single-service.component.scss'
})
export class PageSingleServiceComponent {
 servicesData = [
  {
    id:1,
    title:'Pixel Perfect Design'
  },
  {
    id:2,
    title:'Unlimited Layouts'
  },
  {
    id:3,
    title:'Online Shopping'
  },
  {
    id:4,
    title:'Simple and Secure'
  },
  {
    id:5,
    title:'Automatic Updates'
  },
  {
    id:6,
    title:'No Rocket Science'
  },
  {
    id:7,
    title:'Our Vision'
  },
  {
    id:8,
    title:'Our Mission'
  },
  {
    id:9,
    title:'Design and Development'
  },
  {
    id:10,
    title:'Consultations'
  },
  {
    id:11,
    title:'Digital Solutions'
  },
  {
    id:12,
    title:'Responsive Design'
  },
  {
    id:13,
    title:'Retina Ready Graphics'
  },
  {
    id:14,
    title:'Powerful Performance'
  },
  {
    id:15,
    title:'Unlimited Color Options'
  },
  {
    id:16,
    title:'Customizable Fonts'
  },
  {
    id:17,
    title:'Free Updates'
  },
 ]

 id:any
 data:any

 constructor(private Route:ActivatedRoute){}

 ngOnInit(): void {
  this.id = this.Route.snapshot.params['id'];
  this.data = this.servicesData.find(item => item.id === parseInt(this.id));
 }

 feature:string[] = [
  'Beautiful and easy to understand animations',
  'Our Talented & Experienced Marketing Agency',
  'Theme advantages are pixel perfect design'
 ]

 ability:Ability[] = [
  {
    title:'Research',
    width:'84%'
  },
  {
    title:'Sales & Trading',
    width:'75%'
  },
  {
    title:'Investment',
    width:'79%'
  },
  {
    title:'Finance',
    width:'95%'
  },
 ]

 isOpen:any = false;

 togggleModal(e:any){
   e.preventDefault();
   this.isOpen = !this.isOpen;
 }
}
