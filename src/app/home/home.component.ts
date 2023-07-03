import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    initialSlide: 0,
    infinite: false,
    dots: true,
    drag: true,
    responsive: [
      {
      breakpoint: 2500,
      settings: {
      slidesToShow: 5,
      slidesToScroll: 4,
      infinite: false,
      dots: false
      }
      },
      {
      breakpoint: 1650,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: false,
      dots: false
      }
      },
      {
      breakpoint: 1200,
      settings: {
      slidesToShow: 3.5,
      slidesToScroll: 3,
      infinite: false,
      dots: false
      }
      },
      {
      breakpoint: 954,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: false,
      dots: false
      }
      },
      {
      breakpoint: 490,
      settings: {
      slidesToShow: 1.2,
      slidesToScroll: 1,
      infinite: false,
      dots: false
      }
      },
      {
      breakpoint: 770,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 2,
      infinite: false,
      dots: false
      }
      }]
  }
  addSlide() {
    this.slides.push({ img: '' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
