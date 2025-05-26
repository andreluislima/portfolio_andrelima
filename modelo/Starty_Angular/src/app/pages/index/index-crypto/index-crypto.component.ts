import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { CryptoTaglineComponent } from "../../../components/tagline/crypto-tagline/crypto-tagline.component";
import { MobileAppComponent } from "../../../components/mobile-app/mobile-app.component";
import { FooterFourComponent } from "../../../components/footer/footer-four/footer-four.component";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface About {
  title: string;  
  desc: string;
}

@Component({
  selector: 'app-index-crypto',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CryptoTaglineComponent,
    MobileAppComponent,
    FooterFourComponent
],
  templateUrl: './index-crypto.component.html',
  styleUrl: './index-crypto.component.scss'
})
export class IndexCryptoComponent {
  feature:Feature[] = [
    {
      icon:'uil uil-mobile-android',
      title:'Money Exchange',
      desc:'The advantage Starty of its Latin origin and the relative'
    },
    {
      icon:'uil uil-cube',
      title:'ICO Systems',
      desc:'The advantage Starty of its Latin origin and the relative'
    },
    {
      icon:'uil uil-airplay',
      title:'Secure Apps',
      desc:'The advantage Starty of its Latin origin and the relative'
    },
    {
      icon:'uil uil-illustration',
      title:'System Integrations',
      desc:'The advantage Starty of its Latin origin and the relative'
    },
  ]
  about :About[] = [
    {
      title:'Buy, sell, and trade on the go',
      desc:'Manage your holdings from your mobile device'
    },
    {
      title:'Take control of your wealth',
      desc:'Rest assured you (and only you) have access to your funds'
    },
  ]

  cryptoData = [
    {
      image:'assets/images/crypto/bitcoin.png',
      name:'Bitcoin',
      sName:'BTC',
      price:'$34587',
      changePer:'-2.5%',
      change:'-$745',
      marketCap:'$725,354M',
      status:'loss'
    },
    {
      image:'assets/images/crypto/coinye.png',
      name:'Coinye',
      sName:'CNY',
      price:'$154',
      changePer:'+1.05%',
      change:'+$1.05',
      marketCap:'$85,478M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/ethereum.png',
      name:'Ethereum Coin',
      sName:'ETH',
      price:'$854',
      changePer:'+1.705%',
      change:'+$1.705',
      marketCap:'$112,452M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/blocknet.png',
      name:'Blocknet',
      sName:'BLOCK',
      price:'$478',
      changePer:'+2.8%',
      change:'+$2.8',
      marketCap:'$66,552M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/kucoin.png',
      name:'Kucoin ',
      sName:'KCS',
      price:'$545',
      changePer:'+1.5%',
      change:'+$1.5',
      marketCap:'$98,562M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/bittorrent.png',
      name:'Bittorrent',
      sName:'BTT',
      price:'$4935',
      changePer:'-3.2%',
      change:'-$3.2',
      marketCap:'$663,214M',
      status:'loss'
    },
    {
      image:'assets/images/crypto/avalanche.png',
      name:'Avalanche',
      sName:'AVAX',
      price:'$1008',
      changePer:'+1.4%',
      change:'+$1.4',
      marketCap:'$88,512M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/bitcoin-cash.png',
      name:'Bitcoin cash',
      sName:'BCS',
      price:'$816',
      changePer:'+4.65%',
      change:'+$4.65',
      marketCap:'$54,212M',
      status:'profit'
    },
    {
      image:'assets/images/crypto/binance.png',
      name:'Binance',
      sName:'BNB',
      price:'$965',
      changePer:'-2.45%',
      change:'-$2.45',
      marketCap:'$458,122M',
      status:'loss'
    },
    {
      image:'assets/images/crypto/monero.png',
      name:'Monero',
      sName:'XMR',
      price:'$4758',
      changePer:'+3.5%',
      change:'+$3.5',
      marketCap:'$52,142M',
      status:'profit'
    },
  ]
}
