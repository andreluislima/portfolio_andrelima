import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-navbar',
  imports: [AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class MenubarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
            },
            {
                label: 'Resume',
            },
                      {
                label: 'Projects',
            },
            
            {
                label: 'Contact',
            }
        ]
    }

    menuOpen = false;
    toggleMenu(){
        this.menuOpen = !this.menuOpen;
    }
}

