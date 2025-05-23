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

  title="Resume"
  subtitle=["experience", "education","languages", "Programming Languages", "professional skills"]
  btn="dowload resume"

  experience = resume.experience;
  education = resume.education;
  languages = resume.languages;

  constructor(){}

  ngOnInit(): void {
    
  }
}
