import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexOneComponent } from './pages/index/index-one/index-one.component';

import { IndexApplicationComponent } from './pages/index/index-application/index-application.component';
import { IndexEventComponent } from './pages/index/index-event/index-event.component';
import { IndexPersonalComponent } from './pages/index/index-personal/index-personal.component';
import { IndexCharityComponent } from './pages/index/index-charity/index-charity.component';
import { IndexBusinessComponent } from './pages/index/index-business/index-business.component';
import { IndexSaasComponent } from './pages/index/index-saas/index-saas.component';
import { IndexCryptoComponent } from './pages/index/index-crypto/index-crypto.component';
import { IndexPortfolioComponent } from './pages/index/index-portfolio/index-portfolio.component';
import { IndexPersonalBlogComponent } from './pages/index/index-personal-blog/index-personal-blog.component';
import { IndexCorporateComponent } from './pages/index/index-corporate/index-corporate.component';
import { IndexSeoComponent } from './pages/index/index-seo/index-seo.component';
import { IndexRestaurantComponent } from './pages/index/index-restaurant/index-restaurant.component';
import { IndexFreelancerComponent } from './pages/index/index-freelancer/index-freelancer.component';
import { IndexFinanceComponent } from './pages/index/index-finance/index-finance.component';
import { IndexCafeComponent } from './pages/index/index-cafe/index-cafe.component';
import { StartupComponent } from './pages/index/startup/startup.component';
import { IndexFashionComponent } from './pages/index/index-fashion/index-fashion.component';
import { IndexMarketingComponent } from './pages/index/index-marketing/index-marketing.component';
import { IndexOnepageComponent } from './pages/index/index-onepage/index-onepage.component';

import { PageAboutusComponent } from './pages/page-aboutus/page-aboutus.component';
import { PageServicesComponent } from './pages/services/page-services/page-services.component';
import { PageServicesTwoComponent } from './pages/services/page-services-two/page-services-two.component';
import { PageSingleServiceComponent } from './pages/services/page-single-service/page-single-service.component';
import { PageFaqsComponent } from './pages/page-faqs/page-faqs.component';
import { PagePricingComponent } from './pages/page-pricing/page-pricing.component';
import { PageTeamComponent } from './pages/page-team/page-team.component';
import { ShopGridsComponent } from './pages/shop/shop-grids/shop-grids.component';
import { ShopProductDetailComponent } from './pages/shop/shop-product-detail/shop-product-detail.component';
import { ShopCartComponent } from './pages/shop/shop-cart/shop-cart.component';
import { ShopCheckoutComponent } from './pages/shop/shop-checkout/shop-checkout.component';
import { PageComingsoonComponent } from './pages/special/page-comingsoon/page-comingsoon.component';
import { PageMaintenanceComponent } from './pages/special/page-maintenance/page-maintenance.component';
import { PageErrorComponent } from './pages/special/page-error/page-error.component';
import { ComponentsComponent } from './pages/components/components.component';
import { BlogGridComponent } from './pages/blog/blog-grid/blog-grid.component';
import { BlogMasonryComponent } from './pages/blog/blog-masonry/blog-masonry.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogGridSidebarComponent } from './pages/blog/blog-grid-sidebar/blog-grid-sidebar.component';
import { BlogListSidebarComponent } from './pages/blog/blog-list-sidebar/blog-list-sidebar.component';
import { BlogImageGridComponent } from './pages/blog/blog-image-grid/blog-image-grid.component';
import { BlogImageMasonryComponent } from './pages/blog/blog-image-masonry/blog-image-masonry.component';
import { BlogImageGridSidebarComponent } from './pages/blog/blog-image-grid-sidebar/blog-image-grid-sidebar.component';
import { BlogImageMasonrySidebarComponent } from './pages/blog/blog-image-masonry-sidebar/blog-image-masonry-sidebar.component';
import { BlogDetailOneComponent } from './pages/blog/blog-detail-one/blog-detail-one.component';
import { BlogDetailTwoComponent } from './pages/blog/blog-detail-two/blog-detail-two.component';
import { BlogDetailThreeComponent } from './pages/blog/blog-detail-three/blog-detail-three.component';
import { BlogDetailFourComponent } from './pages/blog/blog-detail-four/blog-detail-four.component';
import { BlogDetailFiveComponent } from './pages/blog/blog-detail-five/blog-detail-five.component';
import { BlogStandardPostComponent } from './pages/blog/blog-standard-post/blog-standard-post.component';
import { BlogSliderPostComponent } from './pages/blog/blog-slider-post/blog-slider-post.component';
import { BlogYoutubePostComponent } from './pages/blog/blog-youtube-post/blog-youtube-post.component';
import { BlogVimeoPostComponent } from './pages/blog/blog-vimeo-post/blog-vimeo-post.component';
import { BlogHtmlVideoPostComponent } from './pages/blog/blog-html-video-post/blog-html-video-post.component';
import { BlogAudioPostComponent } from './pages/blog/blog-audio-post/blog-audio-post.component';
import { BlogHtmlAudioPostComponent } from './pages/blog/blog-html-audio-post/blog-html-audio-post.component';
import { BlogBlockquotePostComponent } from './pages/blog/blog-blockquote-post/blog-blockquote-post.component';
import { BlogAuthorComponent } from './pages/blog/blog-author/blog-author.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { BlogMasonrySidebarComponent } from './pages/blog/blog-masonry-sidebar/blog-masonry-sidebar.component';

import { PortfolioClassicTwoComponent } from './pages/portfolio/portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from './pages/portfolio/portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from './pages/portfolio/portfolio-classic-four/portfolio-classic-four.component';
import { PortfolioClassicFiveComponent } from './pages/portfolio/portfolio-classic-five/portfolio-classic-five.component';
import { PortfolioClassicSixComponent } from './pages/portfolio/portfolio-classic-six/portfolio-classic-six.component';
import { PortfolioClassicSidebarComponent } from './pages/portfolio/portfolio-classic-sidebar/portfolio-classic-sidebar.component';
import { PortfolioCreativeTwoComponent } from './pages/portfolio/portfolio-creative-two/portfolio-creative-two.component';
import { PortfolioCreativeThreeComponent } from './pages/portfolio/portfolio-creative-three/portfolio-creative-three.component';
import { PortfolioCreativeFourComponent } from './pages/portfolio/portfolio-creative-four/portfolio-creative-four.component';
import { PortfolioCreativeFiveComponent } from './pages/portfolio/portfolio-creative-five/portfolio-creative-five.component';
import { PortfolioCreativeSixComponent } from './pages/portfolio/portfolio-creative-six/portfolio-creative-six.component';
import { PortfolioCreativeSidebarComponent } from './pages/portfolio/portfolio-creative-sidebar/portfolio-creative-sidebar.component';
import { PortfolioModernTwoComponent } from './pages/portfolio/portfolio-modern-two/portfolio-modern-two.component';
import { PortfolioModernThreeComponent } from './pages/portfolio/portfolio-modern-three/portfolio-modern-three.component';
import { PortfolioModernFourComponent } from './pages/portfolio/portfolio-modern-four/portfolio-modern-four.component';
import { PortfolioModernFiveComponent } from './pages/portfolio/portfolio-modern-five/portfolio-modern-five.component';
import { PortfolioModernSixComponent } from './pages/portfolio/portfolio-modern-six/portfolio-modern-six.component';
import { PortfolioModernSidebarComponent } from './pages/portfolio/portfolio-modern-sidebar/portfolio-modern-sidebar.component';
import { PortfolioMasonryTwoComponent } from './pages/portfolio/portfolio-masonry-two/portfolio-masonry-two.component';
import { PortfolioMasonryThreeComponent } from './pages/portfolio/portfolio-masonry-three/portfolio-masonry-three.component';
import { PortfolioMasonryFourComponent } from './pages/portfolio/portfolio-masonry-four/portfolio-masonry-four.component';
import { PortfolioMasonryFiveComponent } from './pages/portfolio/portfolio-masonry-five/portfolio-masonry-five.component';
import { PortfolioMasonrySixComponent } from './pages/portfolio/portfolio-masonry-six/portfolio-masonry-six.component';
import { PortfolioMasonrySidebarComponent } from './pages/portfolio/portfolio-masonry-sidebar/portfolio-masonry-sidebar.component';
import { PortfolioDetailOneComponent } from './pages/portfolio/portfolio-detail-one/portfolio-detail-one.component';
import { PortfolioDetailTwoComponent } from './pages/portfolio/portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './pages/portfolio/portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './pages/portfolio/portfolio-detail-four/portfolio-detail-four.component';

export const routes: Routes = [
    {path:'', component:IndexOneComponent},
    {path:'index-startup', component:StartupComponent},
    {path:'index-application', component:IndexApplicationComponent},
    {path:'index-event', component:IndexEventComponent},
    {path:'index-personal', component:IndexPersonalComponent},
    {path:'index-charity', component:IndexCharityComponent},
    {path:'index-business', component:IndexBusinessComponent},
    {path:'index-saas', component:IndexSaasComponent},
    {path:'index-crypto', component:IndexCryptoComponent},
    {path:'index-portfolio', component:IndexPortfolioComponent},
    {path:'index-personal-blog', component:IndexPersonalBlogComponent},
    {path:'index-corporate', component:IndexCorporateComponent},
    {path:'index-seo', component:IndexSeoComponent},
    {path:'index-restaurant', component:IndexRestaurantComponent},
    {path:'index-freelancer', component:IndexFreelancerComponent},
    {path:'index-fashion', component:IndexFashionComponent},
    {path:'index-finance', component:IndexFinanceComponent},
    {path:'index-marketing', component:IndexMarketingComponent},
    {path:'index-cafe', component:IndexCafeComponent},
    {path:'index-onepage', component:IndexOnepageComponent},

    {path:'page-aboutus', component:PageAboutusComponent},
    {path:'page-services', component:PageServicesComponent},
    {path:'page-services-two', component:PageServicesTwoComponent},
    {path:'page-single-service', component:PageSingleServiceComponent},
    {path:'page-single-service/:id', component:PageSingleServiceComponent},
    {path:'page-faqs', component:PageFaqsComponent},
    {path:'page-pricing', component:PagePricingComponent},
    {path:'page-team', component:PageTeamComponent},
    {path:'shop-grids', component:ShopGridsComponent},
    {path:'shop-product-detail', component:ShopProductDetailComponent},
    {path:'shop-product-detail/:id', component:ShopProductDetailComponent},
    {path:'shop-cart', component:ShopCartComponent},
    {path:'shop-checkout', component:ShopCheckoutComponent},
    {path:'page-comingsoon', component:PageComingsoonComponent},
    {path:'page-maintenance', component:PageMaintenanceComponent},
    {path:'page-error', component:PageErrorComponent},
    {path:'components', component:ComponentsComponent},

    {path:'blog-grid', component:BlogGridComponent},
    {path:'blog-masonry', component:BlogMasonryComponent},
    {path:'blog-list', component:BlogListComponent},
    {path:'blog-grid-sidebar', component:BlogGridSidebarComponent},
    {path:'blog-masonry-sidebar', component:BlogMasonrySidebarComponent},
    {path:'blog-list-sidebar', component:BlogListSidebarComponent},
    {path:'blog-image-grid', component:BlogImageGridComponent},
    {path:'blog-image-masonry', component:BlogImageMasonryComponent},
    {path:'blog-image-grid-sidebar', component:BlogImageGridSidebarComponent},
    {path:'blog-image-masonry-sidebar', component:BlogImageMasonrySidebarComponent},
    {path:'blog-detail-one', component:BlogDetailOneComponent},
    {path:'blog-detail-one/:id', component:BlogDetailOneComponent},
    {path:'blog-detail-two', component:BlogDetailTwoComponent},
    {path:'blog-detail-two/:id', component:BlogDetailTwoComponent},
    {path:'blog-detail-three', component:BlogDetailThreeComponent},
    {path:'blog-detail-three/:id', component:BlogDetailThreeComponent},
    {path:'blog-detail-four', component:BlogDetailFourComponent},
    {path:'blog-detail-four/:id', component:BlogDetailFourComponent},
    {path:'blog-detail-five', component:BlogDetailFiveComponent},
    {path:'blog-detail-five/:id', component:BlogDetailFiveComponent},
    {path:'blog-standard-post', component:BlogStandardPostComponent},
    {path:'blog-slider-post', component:BlogSliderPostComponent},
    {path:'blog-youtube-post', component:BlogYoutubePostComponent},
    {path:'blog-vimeo-post', component:BlogVimeoPostComponent},
    {path:'blog-html-video-post', component:BlogHtmlVideoPostComponent},
    {path:'blog-audio-post', component:BlogAudioPostComponent},
    {path:'blog-html-audio-post', component:BlogHtmlAudioPostComponent},
    {path:'blog-blockquote-post', component:BlogBlockquotePostComponent},
    {path:'blog-author', component:BlogAuthorComponent},

    {path:'page-contact', component:PageContactComponent},
    {path:'portfolio-classic-two', component:PortfolioClassicTwoComponent},
    {path:'portfolio-classic-three', component:PortfolioClassicThreeComponent},
    {path:'portfolio-classic-four', component:PortfolioClassicFourComponent},
    {path:'portfolio-classic-five', component:PortfolioClassicFiveComponent},
    {path:'portfolio-classic-six', component:PortfolioClassicSixComponent},
    {path:'portfolio-classic-sidebar', component:PortfolioClassicSidebarComponent},

    {path:'portfolio-creative-two', component:PortfolioCreativeTwoComponent},
    {path:'portfolio-creative-three', component:PortfolioCreativeThreeComponent},
    {path:'portfolio-creative-four', component:PortfolioCreativeFourComponent},
    {path:'portfolio-creative-five', component:PortfolioCreativeFiveComponent},
    {path:'portfolio-creative-six', component:PortfolioCreativeSixComponent},
    {path:'portfolio-creative-sidebar', component:PortfolioCreativeSidebarComponent},

    {path:'portfolio-modern-two', component:PortfolioModernTwoComponent},
    {path:'portfolio-modern-three', component:PortfolioModernThreeComponent},
    {path:'portfolio-modern-four', component:PortfolioModernFourComponent},
    {path:'portfolio-modern-five', component:PortfolioModernFiveComponent},
    {path:'portfolio-modern-six', component:PortfolioModernSixComponent},
    {path:'portfolio-modern-sidebar', component:PortfolioModernSidebarComponent},

    {path:'portfolio-masonry-two', component:PortfolioMasonryTwoComponent},
    {path:'portfolio-masonry-three', component:PortfolioMasonryThreeComponent},
    {path:'portfolio-masonry-four', component:PortfolioMasonryFourComponent},
    {path:'portfolio-masonry-five', component:PortfolioMasonryFiveComponent},
    {path:'portfolio-masonry-six', component:PortfolioMasonrySixComponent},
    {path:'portfolio-masonry-sidebar', component:PortfolioMasonrySidebarComponent},

    {path:'portfolio-detail-one', component:PortfolioDetailOneComponent},
    {path:'portfolio-detail-one/:id', component:PortfolioDetailOneComponent},
    {path:'portfolio-detail-two', component:PortfolioDetailTwoComponent},
    {path:'portfolio-detail-two/:id', component:PortfolioDetailTwoComponent},
    {path:'portfolio-detail-three', component:PortfolioDetailThreeComponent},
    {path:'portfolio-detail-three/:id', component:PortfolioDetailThreeComponent},
    {path:'portfolio-detail-four', component:PortfolioDetailFourComponent},
    {path:'portfolio-detail-four/:id', component:PortfolioDetailFourComponent},


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsersRoutingModule { }
