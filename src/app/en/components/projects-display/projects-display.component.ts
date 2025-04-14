import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Modal, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-projects-display-es',
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
        'A weather application developed with Angular and Tailwind CSS. Developed following all the good practices proposed by the W3C, the ECMA and the SEO.',
      image: './images/projects/webp/nimbusroot.webp',
      alt: 'Image about NimbusRoot Project',
      projectURL: 'https://nbglroot.github.io/nimbusroot/',
      statusUrl: true,
    },
    {
      name: 'ToDoRoot',
      description:
        'TodoRoot is a web application designed to help you organize your tasks efficiently and simply.',
      image: './images/projects/webp/todoroot.webp',
      alt: 'Image about TodoRoot Project',
      projectURL: 'https://nbglroot.github.io/todoroot_deployed/',
      statusUrl: true,
    },
    {
      name: 'CalcRoot',
      description:
        'CalcRoot is a personal project developed by Naim Babanaceur García de Lara, using Angular and Tailwind CSS.',
      image: './images/projects/webp/calcroot.webp',
      alt: 'Image about CalcRoot Project',
      projectURL:
        'https://nbglroot.github.io/calculator_angularTailwind_deployed/calculadora',
        statusUrl: true,
    },
    {
      name: 'WikiRoot App',
      description:
        'Application inspired by Wikipedia and the famous quote of Tim Berners-Lee: The original idea of the web was that it should be a collaborative space where one can communicate sharing information.',
      image: './images/projects/webp/wikiroot.webp',
      alt: 'Image about WikiRoot Project',
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
