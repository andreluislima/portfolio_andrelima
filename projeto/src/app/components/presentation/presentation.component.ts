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

  title_know_me = "Conheça-me Melhor"

  title_skill = "Minhas Habilidades"

  skills = [
    "HTML", "SCSS", "Bootstrap", "JavaScript", "Java", "Python", "PostgreSQL", "Angular", "React",
  ]

  aboutMe = `
  <p>Sou um Desenvolvedor Full Stack com paixão por desenvolver aplicações web.</p>
  
  <p>
    Tenho vários anos de experiência em desenvolvimento web, atuando no setor público, sempre com o objetivo de entregar soluções funcionais, seguras e visualmente atrativas.
  </p>  
  
  <p>
    Confira alguns dos meus trabalhos na seção <strong>Projetos</strong>.  
  </p>

  Se você está procurando alguém para entregar um site bem construído, com boa usabilidade e experiência do usuário, estou aqui para ajudar.`

  constructor(private router:Router){}

  filterBySkill(skill:string){
    this.router.navigate(['/project'], {queryParams:{skill}})
  }

   // description: string = `My Name is André Lima and I Web Developer specialized in creating modern, fast and responsive websites focused on helping businesses improve their online presence.<br>
  // I have serveral years of experience in web development, working on both public sector, aways aiming to deliver solutions that are functional, secure and visually appealing. <br>
  // If you're looking for someone to deliver a well-buit website with good usability and user experience, i'm here to help.`
}
