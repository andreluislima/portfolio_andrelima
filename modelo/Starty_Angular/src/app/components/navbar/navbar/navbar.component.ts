import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterLink,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() navRight:any
  @Input() navLight:any
  @Input() tagline:any

  menu:string = "";
  subManu:any = ""

  constructor(private router:Router){
    this.menu = this.router.url,
    window.scrollTo(0, 0)
  }

  setmanu(item:any, e:any){
    console.log(item);
    
    e.preventDefault();
    if(this.subManu === item){
      this.subManu = ""
    }else{
      this.subManu = item
    }
  }

  toggle:boolean = false

  toggleMenu(e:any){
    e.preventDefault();
    this.toggle = !this.toggle;
  }

  scroll:boolean = false

  @HostListener('window:scroll',[])

  scrollHandler(){
    if(window.scrollY > 50){
      this.scroll = true
    }else{
      this.scroll = false
    }
    
  }
}
