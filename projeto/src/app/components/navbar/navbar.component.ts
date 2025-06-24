import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Collapse from 'bootstrap/js/dist/collapse';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class MenubarBasicDemo {
   
     navPages=['home', 'resume', 'project', 'contact']

    closeNavBar() {
      const navBar = document.getElementById('navbarSupportedContent');
      if (navBar) {
        const bsCollapse = Collapse.getInstance(navBar) || new Collapse(navBar);
        bsCollapse.hide(); // Fecha o menu
      }
    }
}

