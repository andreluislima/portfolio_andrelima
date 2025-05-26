import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeNavbarComponent } from '../../../components/navbar/home-navbar/home-navbar.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import * as bootstrap from 'bootstrap';
import { HomeFooterComponent } from "../../../components/footer/home-footer/home-footer.component";
import { ScrollToTopComponent } from "../../../components/scroll-to-top/scroll-to-top.component";

declare var $: any; 

@Component({
  selector: 'app-index-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HomeNavbarComponent,
    NgxTypedJsModule,
    HomeFooterComponent,
    ScrollToTopComponent
],
  templateUrl: './index-one.component.html',
  styleUrl: './index-one.component.scss'
})
export class IndexOneComponent {

  tooltipData = [
    {
      image:'assets/images/demos/live/bootstrap2.png',
      title:'Bootstrap 5'
    },
    {
      image:'assets/images/demos/live/scss2.png',
      title:'SASS 5'
    },
    {
      image:'assets/images/demos/live/html2.png',
      title:'HTML'
    },
    {
      image:'assets/images/demos/live/css2.png',
      title:'CSS'
    },
    {
      image:'assets/images/demos/live/w3c2.png',
      title:'W3c valid'
    },
    {
      image:'assets/images/demos/live/ui2.png',
      title:'Ui Kit'
    },
  ]

  ngAfterViewInit(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  demos = [
    {
      image:'assets/images/demos/live/startup.png',
      link:'/index-startup',
      title:'StartUp'
    },
    {
      image:'assets/images/demos/live/business.png',
      link:'/index-business',
      title:'Business'
    },
    {
      image:'assets/images/demos/live/corporate.png',
      link:'/index-corporate',
      title:'Corporate'
    },
    {
      image:'assets/images/demos/live/finance.png',
      link:'/index-finance',
      title:'Finance'
    },
    {
      image:'assets/images/demos/live/application.png',
      link:'/index-application',
      title:'Applications'
    },
    {
      image:'assets/images/demos/live/saas.png',
      link:'/index-saas',
      title:'Saas'
    },
    {
      image:'assets/images/demos/live/seo.png',
      link:'/index-seo',
      title:'SEO Agency'
    },
    {
      image:'assets/images/demos/live/marketing.png',
      link:'/index-marketing',
      title:'Marketing Agency'
    },
    {
      image:'assets/images/demos/live/event.png',
      link:'/index-event',
      title:'Event / Conference'
    },
    {
      image:'assets/images/demos/live/crypto.png',
      link:'/index-crypto',
      title:'Cryptocurrency'
    },
    {
      image:'assets/images/demos/live/restaurant.png',
      link:'/index-restaurant',
      title:'Restaurant'
    },
    {
      image:'assets/images/demos/live/cafe.png',
      link:'/index-cafe',
      title:'Cafe'
    },
    {
      image:'assets/images/demos/live/personal.png',
      link:'/index-personal',
      title:'Personal'
    },
    {
      image:'assets/images/demos/live/portfolio.png',
      link:'/index-portfolio',
      title:'Portfolio'
    },
    {
      image:'assets/images/demos/live/freelancer.png',
      link:'/index-freelancer',
      title:'Freelancer'
    },
    {
      image:'assets/images/demos/live/charity.png',
      link:'/index-charity',
      title:'Charity'
    },
    {
      image:'assets/images/demos/live/blog.png',
      link:'/index-blog',
      title:'Personal Blog'
    },
    {
      image:'assets/images/demos/live/fashion.png',
      link:'/index-fashion',
      title:'Fashion'
    },
    {
      image:'assets/images/demos/live/onepage.png',
      link:'/index-onepage',
      title:'Onepage'
    },
  ]

  features = [
    {
      icon:'mdi mdi-bootstrap',
      title:'Bootstrap 5'
    },
    {
      icon:'uil uil-airplay',
      title:'Fully Responsive'
    },
    {
      icon:'uil uil-browser',
      title:'Browser Compatibility'
    },
    {
      icon:'uil uil-eye',
      title:'Retina Ready'
    },
    {
      icon:'mdi mdi-feather',
      title:'Feather Icons'
    },
    {
      icon:'mdi mdi-cube-outline',
      title:'Material Design Icon'
    },
    {
      icon:'mdi mdi-vector-bezier',
      title:'Flaticon Icon'
    },
    {
      icon:'mdi mdi-sass',
      title:'Built With SASS'
    },
    {
      icon:'mdi mdi-check-decagram',
      title:'W3c Valid Code'
    },
    {
      icon:'uil uil-cog',
      title:'Easy to customize'
    },
    {
      icon:'mdi mdi-language-php',
      title:'Working Contact Form'
    },
    {
      icon:'mdi mdi-file-image',
      title:'Free Illustrator Image'
    },
    {
      icon:'uil uil-camera',
      title:'Free Images'
    },
    {
      icon:'mdi mdi-google-glass',
      title:'Free Google Fonts'
    },
    {
      icon:'mdi mdi-code-braces',
      title:'Well Commented Code'
    },
    {
      icon:'mdi mdi-code-tags',
      title:'Clean Code'
    },
    {
      icon:'mdi mdi-update',
      title:'Free Updates'
    },
    {
      icon:'mdi mdi-account-heart-outline',
      title:'Developer Friendly'
    },
    {
      icon:'mdi mdi-animation',
      title:'Animations'
    },
    {
      icon:'mdi mdi-gesture-tap-button',
      title:'Buttons'
    },
    {
      icon:'mdi mdi-comment-quote',
      title:'Blockquotes'
    },
    {
      icon:'mdi mdi-arrow-right-drop-circle-outline',
      title:'Call To Action'
    },
    {
      icon:'mdi mdi-view-carousel-outline',
      title:'Carousel'
    },
    {
      icon:'mdi mdi-email-newsletter',
      title:'Newsletter'
    },
    {
      icon:'mdi mdi-frequently-asked-questions',
      title:'FAQs'
    },
    {
      icon:'mdi mdi-image-multiple',
      title:'Galleries'
    },
    {
      icon:'mdi mdi-tooltip-image-outline',
      title:'Lightbox'
    },
    {
      icon:'mdi mdi-video-vintage',
      title:'Media Embeds'
    },
    {
      icon:'mdi mdi-play-network-outline',
      title:'Modals'
    },
    {
      icon:'mdi mdi-menu',
      title:'Accordion'
    },
    {
      icon:'mdi mdi-arrow-split-horizontal',
      title:'Parallax'
    },
    {
      icon:'mdi mdi-file-table',
      title:'Pricing Tables'
    },
    {
      icon:'mdi mdi-debug-step-over',
      title:'Process Steps'
    },
    {
      icon:'mdi mdi-folder-multiple-image',
      title:'Portfolio'
    },
    {
      icon:'mdi mdi-cart-outline',
      title:'e-Commerce'
    },
    {
      icon:'mdi mdi-facebook',
      title:'Social Icons'
    },
    {
      icon:'mdi mdi-view-carousel',
      title:'Testimonials'
    },
    {
      icon:'mdi mdi-file-document',
      title:'Documentation'
    },
  ]

  innerPages = [
    {
      image:'assets/images/demos/live/inner/about.png',
      link:'/page-aboutus',
      title:'About us',
      category:'about'
    },
    {
      image:'assets/images/demos/live/inner/service.png',
      link:'/page-services',
      title:'Services',
      category:'service'
    },
    {
      image:'assets/images/demos/live/inner/service-two.png',
      link:'/page-services-two',
      title:'Services Two',
      category:'service'
    },
    {
      image:'assets/images/demos/live/inner/service-detail.png',
      link:'page-single-service',
      title:'Service Detail',
      category:'service'
    },
    {
      image:'assets/images/demos/live/inner/shop.png',
      link:'/shop-grids',
      title:'Shop Products',
      category:'shop'
    },
    {
      image:'assets/images/demos/live/inner/shop-detail.png',
      link:'/shop-product-detail',
      title:'Product Detail',
      category:'shop'
    },
    {
      image:'assets/images/demos/live/inner/cart.png',
      link:'/shop-cart',
      title:'Shop Cart',
      category:'shop'
    },
    {
      image:'assets/images/demos/live/inner/checkout.png',
      link:'/shop-checkout',
      title:'Checkouts',
      category:'shop'
    },
    {
      image:'assets/images/demos/live/inner/blog-grid.png',
      link:'/blog-grid',
      title:'Blog Grid',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-image.png',
      link:'/blog-image-grid',
      title:'Image Blogs',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-list.png',
      link:'/blog-list',
      title:'Blog List',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-mesonry.png',
      link:'/blog-masonry',
      title:'Blog Masonry',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-detail-two.png',
      link:'/blog-detail-two',
      title:'Blog Datail',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-detail-three.png',
      link:'/blog-detail-three',
      title:'Blog Datail',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-detail-four.png',
      link:'/blog-detail-four',
      title:'Blog Datail',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/blog-detail-five.png',
      link:'/blog-detail-five',
      title:'Blog Datail',
      category:'blog'
    },
    {
      image:'assets/images/demos/live/inner/pricing.png',
      link:'/page-pricing',
      title:'Pricing',
      category:'p&f'
    },
    {
      image:'assets/images/demos/live/inner/faqs.png',
      link:'/page-faqs',
      title:'FAQs',
      category:'p&f'
    },
    {
      image:'assets/images/demos/live/inner/contact.png',
      link:'/page-contact',
      title:'Contact Us',
      category:'contact'
    },
    {
      image:'assets/images/demos/live/inner/port-three.png',
      link:'/portfolio-classic-three',
      title:'Classic Portfolio',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/port-four.png',
      link:'/portfolio-creative-four',
      title:'Creative Portfolio',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/port-five.png',
      link:'/portfolio-modern-five',
      title:'Modern Portfolio',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/port-six.png',
      link:'/portfolio-masonry-six',
      title:'Masonry Portfolio',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/port-detail-two.png',
      link:'/portfolio-detail-two',
      title:'Portfolio Detail',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/port-detail-three.png',
      link:'/portfolio-detail-three',
      title:'Portfolio Detail',
      category:'portfolio'
    },
    {
      image:'assets/images/demos/live/inner/comingsoon.png',
      link:'/page-comingsoon',
      title:'Comingsoon',
      category:'special'
    },
    {
      image:'assets/images/demos/live/inner/maintenance.png',
      link:'/page-maintenance',
      title:'Maintenance',
      category:'special'
    },
    {
      image:'assets/images/demos/live/inner/error.png',
      link:'/page-error',
      title:'Error',
      category:'special'
    },
  ]

  selectedCategory:any = null
  filteredData:any = this.innerPages;

  filterItems(category:any){
    this.selectedCategory = category
    this.filteredData = this.selectedCategory
    ? this.innerPages.filter((item) => item.category === this.selectedCategory)
    : this.innerPages;
  }

  currentSection: string | null = 'home';

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
        this.currentSection = sectionId;
      }
    });
  }
}
