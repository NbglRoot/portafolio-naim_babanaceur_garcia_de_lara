import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Modal, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-projects-display',
  imports: [CommonModule],
  templateUrl: './projects-display.component.html',
  styleUrl: './projects-display.component.css'
})
export class ProjectsDisplayComponent implements OnInit, OnDestroy {
  initialModals() {
    setTimeout(() => {
      const projectsModalBtns = document.querySelectorAll('.btn');
      // Mostrar modales de proyectos
      projectsModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const modalId = btn.getAttribute('data-modal-target') as string;
          const modalTarget = document.getElementById(modalId);
          const modalUrl = document.querySelector(`#${modalId} iframe`) as HTMLIFrameElement;
          const modalOptions: ModalOptions = {
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses:
                'bg-gray-900/80 z-40',
            closable: true,
            onShow() {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
            },
            onHide() {
              if(modalUrl) {
                modalUrl.src = '';
                console.clear();
              }
            }
          };
          const modal = new Modal(modalTarget, modalOptions)
          modal.show();
          if (modalUrl) {
            modalUrl.src = modalUrl.getAttribute('data-src') as string;
          }
          // Cerrar modales de proyectos
          const projectsModalClosers = document.querySelectorAll('.btn-close-modal');
          projectsModalClosers.forEach(closer => {
            closer.addEventListener('click', () => {
              modal.hide();
            });
          });
        });
      });
    }, 1000);
  }
  ngOnInit(): void {
    this.initialModals();
  }
  ngOnDestroy(): void {
    (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden')
    this.ngOnInit();
  }
  myProjects = [
    {
      name: 'NimbusRoot',
      description:
        'Una aplicación meteorológica desarrollada con Angular y Tailwind CSS. Desarrollada siguiendo todas las buenas prácticas propuestas por el W3C, la ECMA y el SEO.',
      image: './images/projects/webp/nimbusroot.webp',
      alt: 'Imagen sobre el Proyecto NimbusRoot',
      projectURL: 'https://nbglroot.github.io/nimbusroot/',
      statusUrl: true,
    },
    {
      name: 'ToDoRoot',
      description:
        'TodoRoot es una aplicación web diseñada para ayudarte a organizar tus tareas de manera eficiente y sencilla.',
      image: './images/projects/webp/todoroot.webp',
      alt: 'Imagen sobre el Proyecto TodoRoot',
      projectURL: 'https://nbglroot.github.io/todoroot_deployed/',
      statusUrl: true,
    },
    {
      name: 'CalcRoot',
      description:
        'CalcRoot es una aplicación desarrollada como proyecto personal por Naim Babanaceur García de Lara, utilizando Angular y Tailwind CSS.',
      image: './images/projects/webp/calcroot.webp',
      alt: 'Imagen sobre el Proyecto CalcRoot',
      projectURL:
        'https://nbglroot.github.io/calculator_angularTailwind_deployed/calculadora',
        statusUrl: true,
    },
    {
      name: 'WikiRoot App',
      description:
        'Aplicación inspirada en Wikipedia y la famosa cita de Tim Berners-Lee: La idea original de la web era que debería ser un espacio colaborativo donde uno puede comunicarse compartiendo información.',
      image: './images/projects/webp/wikiroot.webp',
      alt: 'Imagen sobre el Proyecto WikiRoot',
      projectURL: 'https://github.com/NbglRoot/WikiRoot_WebApp',
      statusUrl: false,
    },
  ];
  sanitizer: DomSanitizer;
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }
  sanitazeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
