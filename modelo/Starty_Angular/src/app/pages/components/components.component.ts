import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar/navbar.component";
import { NgxMasonryModule } from 'ngx-masonry';
import * as bootstrap from 'bootstrap';

import * as feather from 'feather-icons'
import { FaqThreeComponent } from "../../components/faq/faq-three/faq-three.component";
import { FooterSixComponent } from "../../components/footer/footer-six/footer-six.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    NgxMasonryModule,
    FaqThreeComponent,
    FooterSixComponent
],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

  ngAfterViewInit(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });

    feather.replace()
  }

  display = [
    {
      name:'Display 1',
      style:'display-1'
    },
    {
      name:'Display 2',
      style:'display-2'
    },
    {
      name:'Display 3',
      style:'display-3'
    },
    {
      name:'Display 4',
      style:'display-4'
    },
    {
      name:'Display 5',
      style:'display-5'
    },
    {
      name:'Display 6',
      style:'display-6 mb-0'
    },
  ]

  bgColor = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning',
    'bg-info',
    'bg-light',
    'bg-white border',
    'bg-dark',
    'bg-muted'
  ]
  softBgColor = [
    'bg-soft-primary',
    'bg-soft-secondary',
    'bg-soft-success',
    'bg-soft-danger',
    'bg-soft-warning',
    'bg-soft-info',
    'bg-soft-light border',
    'bg-soft-white border',
    'bg-soft-dark',
    'bg-soft-muted'
  ]

  textColor = [
    {
      name:'.text-primary',
      style:'text-primary'
    },
    {
      name:'.text-secondary',
      style:'text-secondary'
    },
    {
      name:'.text-success',
      style:'text-success'
    },
    {
      name:'.text-danger',
      style:'text-danger'
    },
    {
      name:'.text-warning',
      style:'text-warning'
    },
    {
      name:'.text-info',
      style:'text-info'
    },
    {
      name:'.text-light',
      style:'text-light bg-dark'
    },
    {
      name:'.text-white',
      style:'text-white bg-dark'
    },
    {
      name:'.text-white-50',
      style:'text-white-50 bg-dark'
    },
    {
      name:'.text-dark',
      style:'text-dark'
    },
  ]
  button = [
    {
      name:'Primary',
      style:'btn-primary'
    },
    {
      name:'Secondary',
      style:'btn-secondary'
    },
    {
      name:'Success',
      style:'btn-success'
    },
    {
      name:'Danger',
      style:'btn-danger'
    },
    {
      name:'Info',
      style:'btn-info'
    },
    {
      name:'Warning',
      style:'btn-warning'
    },
    {
      name:'Light',
      style:'btn-light'
    },
    {
      name:'Dark',
      style:'btn-dark'
    },
  ]
  softButton = [
    {
      name:'Primary',
      style:'btn-soft-primary'
    },
    {
      name:'Secondary',
      style:'btn-soft-secondary'
    },
    {
      name:'Success',
      style:'btn-soft-success'
    },
    {
      name:'Danger',
      style:'btn-soft-danger'
    },
    {
      name:'Info',
      style:'btn-soft-info'
    },
    {
      name:'Warning',
      style:'btn-soft-warning'
    },
    {
      name:'Light',
      style:'btn-soft-light'
    },
    {
      name:'Dark',
      style:'btn-soft-dark'
    },
  ]
  outLine = [
    {
      name:'Primary',
      style:'btn-outline-primary'
    },
    {
      name:'Secondary',
      style:'btn-outline-secondary'
    },
    {
      name:'Success',
      style:'btn-outline-success'
    },
    {
      name:'Danger',
      style:'btn-outline-danger'
    },
    {
      name:'Info',
      style:'btn-outline-info'
    },
    {
      name:'Warning',
      style:'btn-outline-warning'
    },
    {
      name:'Light',
      style:'btn-outline-light'
    },
    {
      name:'Dark',
      style:'btn-outline-dark'
    },
  ]
  iconBtn = [
    {
      icon:'facebook',
      style:'btn-primary'
    },
    {
      icon:'twitter',
      style:'btn-info'
    },
    {
      icon:'youtube',
      style:'btn-danger'
    },
    {
      icon:'gitlab',
      style:'btn-success'
    },
    {
      icon:'linkedin',
      style:'btn-secondary'
    },
    {
      icon:'github',
      style:'btn-warning'
    },
    {
      icon:'star',
      style:'btn-info'
    },
  ]

  outLineBtn = [
    {
      icon:'facebook',
      style:'btn-outline-primary'
    },
    {
      icon:'twitter',
      style:'btn-outline-info'
    },
    {
      icon:'youtube',
      style:'btn-outline-danger'
    },
    {
      icon:'gitlab',
      style:'btn-outline-success'
    },
    {
      icon:'linkedin',
      style:'btn-outline-secondary'
    },
    {
      icon:'github',
      style:'btn-outline-warning'
    },
  ]

  badge = [
    {
      name:'Primary',
      style:'text-bg-primary'
    },
    {
      name:'Secondary',
      style:'text-bg-secondary'
    },
    {
      name:'Success',
      style:'text-bg-success'
    },
    {
      name:'Danger',
      style:'text-bg-danger'
    },
    {
      name:'Warning',
      style:'text-bg-warning'
    },
    {
      name:'Info',
      style:'text-bg-info'
    },
    {
      name:'Light',
      style:'text-bg-light'
    },
    {
      name:'Dark',
      style:'text-bg-dark'
    },
  ]

  softBadges = [
    {
      name:'Primary',
      style:'bg-soft-primary'
    },
    {
      name:'Secondary',
      style:'bg-soft-secondary'
    },
    {
      name:'Success',
      style:'bg-soft-success'
    },
    {
      name:'Danger',
      style:'bg-soft-danger'
    },
    {
      name:'Warning',
      style:'bg-soft-warning'
    },
    {
      name:'Info',
      style:'bg-soft-info'
    },
    {
      name:'Light',
      style:'bg-soft-light'
    },
    {
      name:'Dark',
      style:'bg-soft-dark'
    },
  ]
  alert = [
    {
      title:'A simple primary alert—check it out!',
      style:'alert-primary'
    },
    {
      title:'A simple secondary alert—check it out!',
      style:'alert-secondary'
    },
    {
      title:' A simple success alert—check it out!',
      style:'alert-success'
    },
    {
      title:'A simple danger alert—check it out!',
      style:'alert-danger'
    },
    {
      title:'A simple warning alert—check it out!',
      style:'alert-warning'
    },
    {
      title:'A simple info alert—check it out!',
      style:'alert-info'
    },
    {
      title:'A simple light alert—check it out!',
      style:'alert-light'
    },
    {
      title:'A simple dark alert—check it out!',
      style:'alert-dark mb-0'
    },
  ]

  linkAlert = [
    {
      title:'A simple primary alert with',
      style:'alert-primary'
    },
    {
      title:'A simple secondary alert with',
      style:'alert-secondary'
    },
    {
      title:'A simple success alert with',
      style:'alert-success'
    },
    {
      title:'A simple danger alert with',
      style:'alert-danger'
    },
    {
      title:'A simple warning alert with',
      style:'alert-warning'
    },
    {
      title:'A simple info alert with',
      style:'alert-info'
    },
    {
      title:'A simple light alert with',
      style:'alert-light'
    },
    {
      title:'A simple dark alert with',
      style:'alert-dark mb-0'
    },
  ]

  closeAlert = [
    {
      title1:'Well done!',
      title2:'You successfully read this important alert message.',
      style:'alert-success'
    },
    {
      title1:'Heads up!',
      title2:`This alert needs your attention, but it's not super important.`,
      style:'alert-info'
    },
    {
      title1:'Holy guacamole!',
      title2:'You should check in on some of those fields below.',
      style:'alert-warning'
    },
    {
      title1:'Oh snap!',
      title2:'Change a few things up and try submitting again.',
      style:'alert-danger'
    },
  ]

  cards = [
    {
      image:'assets/images/blog/01.jpg',
      title:'Multipurpose HTML5 Template: Starty',
      desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
    },
    {
      image:'assets/images/blog/02.jpg',
      title:'Multipurpose HTML5 Template: Starty',
      desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
    },
  ]

  avatar = [
    'avatar-ex-sm',
    'avatar-md-sm',
    'avatar-small',
    'avatar-medium',
    'avatar-large mt-3 mt-sm-0'
  ]

  progress = [
    {
      title:'WordPress',
      width:'84%'
    },
    {
      title:'PHP / MYSQL',
      width:'75%'
    },
    {
      title:'Angular / JavaScript',
      width:'79%'
    },
    {
      title:'HTML',
      width:'95%'
    },
  ]
  tooltips = [
    {
      placement:'top',
      title:'Top Tooltip',
      name:'Top'
    },
    {
      placement:'left',
      title:'Left Tooltip',
      name:'Left'
    },
    {
      placement:'bottom',
      title:'Bottom Tooltip',
      name:'Bottom'
    },
    {
      placement:'right',
      title:'Right Tooltip',
      name:'Right'
    },
  ]

  table = [
    {
      number:1,
      first:'Mark',
      last:'Otto',
      handle:'&mdo'
    },
    {
      number:2,
      first:'Jacob',
      last:'Thornton',
      handle:'&fat'
    },
    {
      number:3,
      first:'Harry',
      last:'Potter',
      handle:'&hpt'
    },
  ]
}
