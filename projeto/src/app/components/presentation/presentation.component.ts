import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  imports: [CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  skills = [
    "HTML", "SCSS", "Bootstrap", "JavaScript", "Java", "Python", "PostgreSQL", "Angular", "React",
  ]

  aboutMe = `
  <p> I'm a <strong>Full Stack Developer</strong> with passion for developing web applications.</p>
  
  <p>
    I have serveral years of experience in web development, working on both public sector, aways aiming to deliver solutions that are functional, secure and visually appealing. 
  </p>  
  
  <p>
    Check out some of my work in the Projects section. 
    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
  </p>

  If you're looking for someone to deliver a well-buit website with good usability and user experience, i'm here to help.`

  constructor(private router:Router){}

  filterBySkill(skill:string){
    this.router.navigate(['/project'], {queryParams:{skill}})
  }

   // description: string = `My Name is André Lima and I Web Developer specialized in creating modern, fast and responsive websites focused on helping businesses improve their online presence.<br>
  // I have serveral years of experience in web development, working on both public sector, aways aiming to deliver solutions that are functional, secure and visually appealing. <br>
  // If you're looking for someone to deliver a well-buit website with good usability and user experience, i'm here to help.`
}
