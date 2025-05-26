import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';


interface ProjectData {
    id: number;
    image: string;
    title: string;
    subTitle: string;
    category: string;
}

@Component({
  selector: 'app-project-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LightgalleryModule,
 
  ],
  templateUrl: './project-two.component.html',
  styleUrl: './project-two.component.scss'
})

export class ProjectTwoComponent {
  projectData : ProjectData[] = [
    {
      id:1,
      image:'assets/images/portfolio/01.jpg',
      title:'The Leaf and Letter',
      subTitle:'Branding',
      category:'branding'
    },
    {
      id:2,
      image:'assets/images/portfolio/02.jpg',
      title:'The Papers',
      subTitle:'Designing',
      category:'designing'
    },
    {
      id:3,
      image:'assets/images/portfolio/03.jpg',
      title:'The Headphones',
      subTitle:'Photography',
      category:'photography'
    },
    {
      id:4,
      image:'assets/images/portfolio/04.jpg',
      title:'The Projects',
      subTitle:'Development',
      category:'development'
    },
    {
      id:5,
      image:'assets/images/portfolio/05.jpg',
      title:'The Cup of Coffee',
      subTitle:'Branding',
      category:'branding'
    },
    {
      id:6,
      image:'assets/images/portfolio/06.jpg',
      title:'The Pen and Books',
      subTitle:'Designing',
      category:'designing'
    },
    {
      id:7,
      image:'assets/images/portfolio/07.jpg',
      title:'The Strawberry',
      subTitle:'Photography',
      category:'photography'
    },
    {
      id:8,
      image:'assets/images/portfolio/08.jpg',
      title:'The Leaf and Books',
      subTitle:'Development',
      category:'development'
    },
    {
      id:9,
      image:'assets/images/portfolio/09.jpg',
      title:'The Cactus Plant',
      subTitle:'Branding',
      category:'branding'
    },
    {
      id:10,
      image:'assets/images/portfolio/10.jpg',
      title:'The Yellow Bag',
      subTitle:'Photography',
      category:'photography'
    },
  ]

  selectedCategory:any = null;
  filteredData:any = this.projectData

  filterItems(category:any){
    this.selectedCategory = category;
    this.filteredData = this.selectedCategory ? this.projectData.filter((item:any) => item.category === this.selectedCategory) : this.projectData
  }


}
