import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Social {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-page-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './page-maintenance.component.html',
  styleUrl: './page-maintenance.component.scss'
})
export class PageMaintenanceComponent {
  social : Social[] = [
    {
      icon:'uil uil-shopping-cart align-middle',
      link:'https://1.envato.market/starty-angular'
    },
    {
      icon:'uil uil-dribbble align-middle',
      link:'https://dribbble.com/shreethemes'
    },
    {
      icon:'uil uil-behance',
      link:'https://www.behance.net/shreethemes'
    },
    {
      icon:'uil uil-linkedin',
      link:'http://linkedin.com/company/shreethemes'
    },
    {
      icon:'uil uil-facebook-f align-middle',
      link:'https://www.facebook.com/shreethemes'
    },
    {
      icon:'uil uil-instagram align-middle',
      link:'https://www.instagram.com/shreethemes'
    },
    {
      icon:'uil uil-twitter align-middle',
      link:'https://twitter.com/shreethemes'
    },
    {
      icon:'uil uil-envelope align-middle',
      link:'mailto:support@shreethemes.in'
    },
    {
      icon:'uil uil-file align-middle',
      link:'https://forms.gle/QkTueCikDGqJnbky9'
    },
  ]

  minutes:number = 0;
  remainingSeconds:number = 0;
  seconds:number=3599;
  intervalId:any = 0

  ngAfterViewInit() {

    this.intervalId = setInterval(() => {
                this.calculateTimeRemaining()
            }, 1000);
  }
      calculateTimeRemaining() {
          this.minutes = Math.round((this.seconds - 30) / 60);
          console.log(this.minutes);
          
          this.remainingSeconds = this.seconds % 60;
          if (this.seconds === 0) {
              clearInterval(this.intervalId);
          } else {
              this.seconds = this.seconds - 1;
          }
      }
}
