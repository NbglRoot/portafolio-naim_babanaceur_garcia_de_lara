import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-side-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './side-header.component.html',
  styleUrl: './side-header.component.css'
})
export class SideHeaderComponent {
  SIDE_BAR_OPTIONS = [
    { title: 'Inicio', path: '/inicio', icon: 'house' },
    { title: 'Sobre mí', path: '/sobre-mi', icon: 'user' },
    { title: 'Contacta me', path: '/contacto', icon: 'envelope' }
  ]

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
