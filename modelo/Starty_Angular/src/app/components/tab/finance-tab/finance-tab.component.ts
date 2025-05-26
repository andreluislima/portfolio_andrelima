import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-finance-tab',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './finance-tab.component.html',
  styleUrl: './finance-tab.component.scss'
})
export class FinanceTabComponent {

}
