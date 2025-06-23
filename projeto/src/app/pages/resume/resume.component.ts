import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resume } from '../../../data/resume';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit{

  title_session="Resume"
  subtitle=["experience", "education","languages", "Programming Languages", "professional skills"]
  btn="dowload resume"

  experience = [
    {
      "function":"Desenvolvedor Full Stack",
      "employer":"Ilha Service",
      "city":"Rio de Janeiro",
      "client": "INT (Instituto Nacional de Tecnologia",
      "dateStart":"2022",
      "dateEnd":"Atualmente",
      "description":`Responsável técnico pelo sistema principal da instituição.<br>
                    <strong>Destaque</strong>: Implantação do Git e sistema de versionamento automatizado.
                    Desenvolvimento com Java, Angular, TypeScript, PostgreSQL e Figma.`
    },

    {
      "function":"Analista de suporte",
      "employer":"CertiRio",
      "city":"Rio de Janeiro",
      "client": "INT (Instituto Nacional de Tecnologia",
      "dateStart":"2019",
      "dateEnd":"2022",
      "description":`Atendimento técnico, infraestrutura de TI e certificação digital. <br>
                     <strong>Destaque</strong>: Implementação de redundância de rede para evitar
                      indisponibilidades.`
    }
  ]


  education = [
    {
      "course":"Curso de Programação Full Stack",
      "school":"Step computer academy",
      "location":"Rio de Janeiro",
      "degree":"Especialização",
      "dateStart":"2022",
      "dateEnd":"2025"
    },

    {
      "course":"Análise em Desenvolvimento de Sistemas",
      "school":"Unopar",
      "location":"Rio de Janeiro",
      "degree":"Graduação",
      "dateStart":"2018",
      "dateEnd":"2021"
    },

    {
      "course":"Técnico em informática",
      "school":"Senac,",
      "location":"Rio de Janeiro",
      "degree":"Técnico",
      "dateStart":"2015",
      "dateEnd":"2015"
    },

  ]

  language = [
    {
      "name":"English",
      "level":"Intermediary"
    },
    {
      "name":"Italian",
      "level":"Advanced"
    },
    {
      "name":"Spanish",
      "level":"Basic"
    },

  ]

  programmingLanguages = ["HTML", "SCSS", "JavaScript", "Java", "Python"]
  professionalSkills = [
    "Desenvolvimento Full Stack",
    "Java (Spring Boot)",
    "Angular",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Git e Controle de Versão",
    "Integração de APIs REST",
    "Versionamento Semântico",
    "Figma",
    "Metodologias Ágeis (Scrum)",
    "Boas práticas de Clean Code",
    "SQL e Modelagem de Banco de Dados",
    "Documentação Técnica",
    "Deploy em Cloud (AWS / Netlify)"
  ]
 

  constructor(){}

  ngOnInit(): void {
    
  }
}
