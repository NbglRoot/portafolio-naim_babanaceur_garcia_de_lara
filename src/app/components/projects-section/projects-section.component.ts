import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ProjectsItem } from '../components-types';

@Component({
  selector: 'app-projects-section',
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent implements OnInit, AfterViewInit {
  @Input() inNeedOfActivation = false;
  componentLanguageEN = false;

  ngOnInit(): void {
    this.componentLanguageEN = localStorage.getItem('language') === 'EN' ? true : false;
  }

  ngAfterViewInit(): void {
    const insideScreenMockUp = document.getElementById('screen-content') as HTMLElement
    (document.querySelectorAll('.fa-xmark') as NodeListOf<HTMLElement>).forEach(btn => {
      btn.addEventListener('click', (event ) => {
        const xmark = event.target as HTMLElement
        const projectCard = xmark.closest('.project_card') as HTMLElement
        projectCard?.classList.add('hidden')
        const emptyWindow = document.createElement('div')
        emptyWindow.classList.add('emptyWindow', 'h-full', 'w-full')
        insideScreenMockUp?.appendChild(emptyWindow)
      })
    })

    if (!this.inNeedOfActivation && window.innerWidth > 982) {
      const screenObserver = new IntersectionObserver((element) => {
        element.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('hidden')
            }, 1500);
            setTimeout(() => {
              document.getElementById('screen-content')?.classList.add('fade-in-screen')
            }, 1500);
          }
        })
      }, { rootMargin: '-200px' })
      screenObserver.observe((document.getElementById('mockup-wXP-loading') as HTMLElement))
    } else {
      const screenObserver = new IntersectionObserver((element) => {
        element.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('hidden')
            }, 1500);
            setTimeout(() => {
              document.getElementById('screen-content')?.classList.add('fade-in-screen')
            }, 1500);
          }
        })
      })
      screenObserver.observe((document.getElementById('mockup-wXP-loading') as HTMLElement))
    }

  }

  myProjects: ProjectsItem[] = [
    {
      name: 'NimbusRoot',
      description:
        'Una aplicación meteorológica desarrollada con Angular y Tailwind CSS. Desarrollada siguiendo todas las buenas prácticas propuestas por el W3C, la ECMA y el SEO.',
      descriptionEN: 'A weather application developed with Angular and Tailwind CSS. Developed following all the best practices proposed by the W3C, ECMA and SEO.',
      image: './images/projects/webp/nimbusroot.webp',
      alt: 'Imagen sobre el Proyecto NimbusRoot',
      altEN: 'Image about the NimbusRoot Project',
      projectURL: 'https://nbglroot.github.io/nimbusroot/',
      statusUrl: true,
    },
    {
      name: 'ToDoRoot',
      description:
        'TodoRoot es una aplicación web diseñada para ayudarte a organizar tus tareas de manera eficiente y sencilla.',
      descriptionEN: 'TodoRoot is a web application designed to help you organize your tasks efficiently and simply.',
      image: './images/projects/webp/todoroot.webp',
      alt: 'Imagen sobre el Proyecto TodoRoot',
      altEN: 'Image about the TodoRoot Project',
      projectURL: 'https://nbglroot.github.io/todoroot_deployed/',
      statusUrl: true,
    },
    {
      name: 'CalcRoot',
      description:
        'CalcRoot es una aplicación desarrollada como proyecto personal por Naim Babanaceur García de Lara, utilizando Angular y Tailwind CSS.',
      descriptionEN: 'CalcRoot is a personal project developed by Naim Babanaceur García de Lara, using Angular and Tailwind CSS.',
      image: './images/projects/webp/calcroot.webp',
      alt: 'Imagen sobre el Proyecto CalcRoot',
      altEN: 'Image about the CalcRoot Project',
      projectURL:
        'https://nbglroot.github.io/calculator_angularTailwind_deployed/calculadora',
        statusUrl: true,
    },
    {
      name: 'WikiRoot App',
      description:
        'Aplicación inspirada en Wikipedia y la famosa cita de Tim Berners-Lee: La idea original de la web era que debería ser un espacio colaborativo donde uno puede comunicarse compartiendo información.',
      descriptionEN: 'A web application inspired by Wikipedia and the famous quote of Tim Berners-Lee: The original idea of the web was that it should be a collaborative space where one can communicate by sharing information.',
      image: './images/projects/webp/wikiroot.webp',
      alt: 'Imagen sobre el Proyecto WikiRoot',
      altEN: 'Image about the WikiRoot Project',
      projectURL: 'https://github.com/NbglRoot/WikiRoot_WebApp',
      statusUrl: false,
    },
  ];
}
