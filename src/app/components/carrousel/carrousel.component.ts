import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
    slides = [
      {
        img: "assets/home/electric2.jpg",
        title:'Estação de Carregamento',
        description:'Estações de Carregamento elétrico de automóveis em grande porte com tecnologia avançada, garantindo um carregamento rápido e seguro.'
    },
      {
        img: "assets/home/substation.jpeg",
        title:'Subestações',
        description:'Construção e manutenção de Subestações. Projetos elétricos em baixa, média e alta tensão em modalidade residencial, predial e industrial. Instalação e manutenção de Linhas Vivas.'
      },
      {
        img: "assets/home/ete.jpg",
        title:'Eficiência Energética',
        description:'A eficiência energética busca otimizar o uso de energia, reduzindo custos e impactos ambientais, além de inovadora e totalmente sustentável.'
      },
      {
        img: "assets/home/energy_eficient.jpg",
        title:'Estrutura Metálica',
        description:'Soluções flexíveis e eficientes para atender às necessidades de construção e ampliação de infraestruturas com resistência, durabilidade e segurança.'
      },
      {
        img: "assets/home/metalic_structure.jpg",
        title:'Construção a Seco',
        description:'Utilizando técnicas modernas e materiais especializados, entregamos estruturas duráveis e de alta qualidade em um tempo reduzido.'
      },
      {
        img: "assets/home/dry_construction.png",
        title:'Parque Solar',
        description:'Oferecemos uma solução sustentável e rentável para geração de energia limpa. Com a instalação de painéis solares em áreas estrategicamente projetadas, transformamos espaços ociosos em fontes renováveis de energia.'
      },
      {
        img: "assets/home/solar_park.jpg",
        title:'Monitoramento Urbano',
        description:'Gestão inteligente do fluxo viário com tecnologia avançada de monitoramento e análise, fornecendo informações em tempo real sobre o tráfego.'
      },
      {
        img: "assets/home/metalic_structure.jpg",
        title:'Iluminação Pública',
        description:'Expertise em tecnologia de iluminação LED, fornecemos um sistema completo que abrange desde o projeto até a instalação e manutenção.'
      },
      {
        img: "assets/home/dry_construction.png",
        title:'',
        description:''
      },
      {
        img: "assets/home/urban.png",
        title:'',
        description:''
      },
      {
        img: "assets/home/public_ilumination.jpg",
        title:'',
        description:''
      }
    ];
    slideConfig = {
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      initialSlide: 0,
      infinite: false,
      dots: true,
      drag: true,
      adaptiveHeight: false,
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
    
  
}
