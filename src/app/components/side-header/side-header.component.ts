import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-side-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './side-header.component.html',
  styleUrl: './side-header.component.css'
})
export class SideHeaderComponent implements OnInit {
  language: string = 'es';
  
  ngOnInit(): void {
    switch (localStorage.getItem('language')) {
      case 'en':
        this.language = 'en';
        this.SIDE_BAR_OPTIONS = this.SIDE_BAR_OPTIONS_EN;
        this.router.navigate(['/en/home']);
        break;
      default:
        this.language = 'es';
        this.SIDE_BAR_OPTIONS = this.SIDE_BAR_OPTIONS_ES;
        break;
    }
  }

  constructor(private router: Router) {}


  goToRoute(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    this.language = selectedValue;
    
    if(selectedValue === 'en') {
      this.router.navigate(['/en/home']);
      this.SIDE_BAR_OPTIONS = this.SIDE_BAR_OPTIONS_EN;
      localStorage.setItem('language', 'en');
    } else {
      this.router.navigate(['']);
      this.SIDE_BAR_OPTIONS = this.SIDE_BAR_OPTIONS_ES;
      localStorage.setItem('language', 'es');
    }
  }

  
  SIDE_BAR_OPTIONS_ES = [
    { title: 'Inicio', path: '/inicio', icon: 'house' },
    { title: 'Sobre mí', path: '/sobre-mi', icon: 'user' },
    { title: 'Contacta me', path: '/contacto', icon: 'envelope' }
  ]
  
  SIDE_BAR_OPTIONS_EN = [
    { title: 'Home', path: '/en/home', icon: 'house' },
    { title: 'About Me', path: '/en/about-me', icon: 'user' },
    { title: 'Contact Me', path: '/en/contact-me', icon: 'envelope' }
  ]

  SIDE_BAR_OPTIONS: any = this.language === 'es' ? this.SIDE_BAR_OPTIONS_ES : this.SIDE_BAR_OPTIONS_EN;
  
  myProjects = [
    {
      name: 'NimbusRoot',
      description:
        'Una aplicación meteorológica desarrollada con Angular y Tailwind CSS. Desarrollada siguiendo todas las buenas prácticas propuestas por el W3C, la ECMA y el SEO.',
      projectURL: 'https://nbglroot.github.io/nimbusroot/',
    },
    {
      name: 'ToDoRoot',
      description:
        'TodoRoot es una aplicación web diseñada para ayudarte a organizar tus tareas de manera eficiente y sencilla.',
      projectURL: 'https://nbglroot.github.io/todoroot_deployed/',
    },
    {
      name: 'CalcRoot',
      description:
        'CalcRoot es una aplicación desarrollada como proyecto personal por Naim Babanaceur García de Lara, utilizando Angular y Tailwind CSS.',
      projectURL:
        'https://nbglroot.github.io/calculator_angularTailwind_deployed/calculadora',
    },
    {
      name: 'WikiRoot App',
      description:
        'Aplicación inspirada en Wikipedia y la famosa cita de Tim Berners-Lee: La idea original de la web era que debería ser un espacio colaborativo donde uno puede comunicarse compartiendo información.',
      projectURL: 'https://github.com/NbglRoot/WikiRoot_WebApp',
    },
  ];
}
