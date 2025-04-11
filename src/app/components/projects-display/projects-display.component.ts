import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-projects-display',
  imports: [CommonModule],
  templateUrl: './projects-display.component.html',
  styleUrl: './projects-display.component.css'
})
export class ProjectsDisplayComponent {
  myProjects = [
    {
      name: 'NimbusRoot',
      description:
        'Una aplicación meteorológica desarrollada con Angular y Tailwind CSS. Desarrollada siguiendo todas las buenas prácticas propuestas por el W3C, la ECMA y el SEO.',
      image: './images/projects/webp/nimbusroot.webp',
      alt: 'Imagen sobre el Proyecto NimbusRoot',
      projectURL: 'https://nbglroot.github.io/nimbusroot/',
    },
    {
      name: 'ToDoRoot',
      description:
        'TodoRoot es una aplicación web diseñada para ayudarte a organizar tus tareas de manera eficiente y sencilla.',
      image: './images/projects/webp/todoroot.webp',
      alt: 'Imagen sobre el Proyecto TodoRoot',
      projectURL: 'https://nbglroot.github.io/todoroot_deployed/',
    },
    {
      name: 'CalcRoot',
      description:
        'CalcRoot es una aplicación desarrollada como proyecto personal por Naim Babanaceur García de Lara, utilizando Angular y Tailwind CSS.',
      image: './images/projects/webp/calcroot.webp',
      alt: 'Imagen sobre el Proyecto CalcRoot',
      projectURL:
        'https://nbglroot.github.io/calculator_angularTailwind_deployed/calculadora',
    },
    {
      name: 'WikiRoot App',
      description:
        'Aplicación inspirada en Wikipedia y la famosa cita de Tim Berners-Lee: La idea original de la web era que debería ser un espacio colaborativo donde uno puede comunicarse compartiendo información.',
      image: './images/projects/webp/wikiroot.webp',
      alt: 'Imagen sobre el Proyecto WikiRoot',
      projectURL: 'https://github.com/NbglRoot/WikiRoot_WebApp',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
