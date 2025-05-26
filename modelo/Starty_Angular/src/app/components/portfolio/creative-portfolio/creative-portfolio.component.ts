import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import PortfolioData from '../../../data/classicportfolio.json'
import { LightgalleryModule } from 'lightgallery/angular';

interface Portfolio {
  id: number;
  image: string;
  name: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-creative-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LightgalleryModule
  ],
  templateUrl: './creative-portfolio.component.html',
  styleUrl: './creative-portfolio.component.scss'
})
export class CreativePortfolioComponent {
  @Input() col:any
  @Input() row:any

  portffolioData:Portfolio[] = PortfolioData

  selectedCategory:any = null;
  filteredData:any = this.portffolioData

  filterItems(category:any){
    this.selectedCategory = category;
    this.filteredData = this.selectedCategory ? this.portffolioData.filter((item:any) => item.category === this.selectedCategory) : this.portffolioData
  }
}
