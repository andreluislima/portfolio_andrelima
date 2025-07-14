import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  title_session = "Projetos"

  projects = [
    {
      "title":"Restaurante Brazucas",
      "date":"04/2023",
      "description":"Desenvolvimento de uma landing page moderna e responsiva para o restaurante Brazucas, especializado em culinária brasileira. O projeto teve como foco destacar a identidade visual brasileira, promover os pratos típicos da casa e facilitar o contato com os clientes por meio de uma navegação simples e intuitiva.",
      "stacks":["HTML5", "CSS3", "Bootstrap"],
      "link_projeto":"https://brazucas-restaurante.netlify.app/",
      "img":"assets/projects/brazucas.png",

    },
    

    {
      "title": "Portfólio Profissional",
      "date": "06/2025",
      "description": "Criação de um site pessoal com foco em apresentação profissional. O objetivo foi destacar minhas principais habilidades como desenvolvedor Full Stack, exibir projetos realizados e facilitar o contato com recrutadores e clientes. O layout foi pensado para ser moderno, responsivo e de fácil navegação, proporcionando uma boa experiência ao usuário.",
      "stacks":["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      "link_projeto": "https://portifolioandrelima.netlify.app/",
      "img":"assets/projects/portifolio.png"
    }


  ]

  filteredProjects = this.projects;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const skill = params['skill'];
      if (skill) {
        this.filteredProjects = this.projects.filter(p =>
          p.stacks.some(stack => stack.toLowerCase().includes(skill.toLowerCase()))
        );
      } else {
        this.filteredProjects = this.projects;
      }
    });
  }
}