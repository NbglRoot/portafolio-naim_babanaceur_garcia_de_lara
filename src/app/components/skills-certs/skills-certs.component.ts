import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tooltip, TooltipInterface } from 'flowbite';

@Component({
  selector: 'app-skills-certs',
  imports: [CommonModule],
  templateUrl: './skills-certs.component.html',
  styleUrl: './skills-certs.component.css',
})
export class SkillsCertsComponent implements OnInit {
  toggleText = 'Skills';
  skills = [
    { name: 'ANGULAR', level: 90, icon: 'fab fa-angular' },
    { name: 'JAVASCRIPT', level: 95, icon: 'fab fa-js' },
    { name: 'GIT', level: 95, icon: 'fab fa-git' },
    { name: 'TAILWIND', level: 94, icon: 'fab fa-css3-alt' },
    { name: 'BOOTSTRAP', level: 98, icon: 'fab fa-bootstrap' },
    { name: 'TYPESCRIPT', level: 97, icon: 'fa-solid fa-t' },
    { name: 'REACT', level: 75, icon: 'fab fa-react' },
    {
      name: 'LAYOUT RESPONSIVO',
      level: 94,
      icon: 'fa-solid fa-tablet-screen-button',
    },
    { name: 'HTML5', level: 99, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 96, icon: 'fab fa-css3' },
  ];
  certificates = [
    {
      id: 1,
      name: 'Fundamentos de Angular',
      url: './assets/pdf/certificates/certificado_fundamentos_de_angular.pdf',
    },
    {
      id: 2,
      name: 'Git',
      url: './assets/pdf/certificates/certificado_curso_de_git.pdf',
    },
    {
      id: 3,
      name: 'Bootstrap 4 Componentes',
      url: './assets/pdf/certificates/certificado_bootstrap_4__componentes.pdf',
    },
    {
      id: 4,
      name: 'Bootstrap 4 Maquetación Responsive y Layout',
      url: './assets/pdf/certificates/certificado_bootstrap_4__maquetacion_responsive_y_layout.pdf',
    },
    {
      id: 5,
      name: 'Flexbox y CSS Grid',
      url: './assets/pdf/certificates/certificado_curso_de_flexbox_y_css_grid.pdf',
    },
    {
      id: 6,
      name: 'HTML5 y CSS3',
      url: './assets/pdf/certificates/certificado_curso_de_html5_y_css3.pdf',
    },
    {
      id: 7,
      name: 'Manipulación del DOM desde Javascript',
      url: './assets/pdf/certificates/certificado_curso_de_manipulacion_del_dom_desde_javascript.pdf',
    },
    {
      id: 8,
      name: 'Maquetación Web con CSS',
      url: './assets/pdf/certificates/certificado_curso_de_maquetacion_web_con_css.pdf',
    },
    {
      id: 9,
      name: 'Responsive Web Design',
      url: './assets/pdf/certificates/certificado_curso_de_responsive_web_design.pdf',
    },
    {
      id: 10,
      name: 'ECMAScript',
      url: './assets/pdf/certificates/certificado_ecmascript.pdf',
    },
    {
      id: 11,
      name: 'Especialización en Javascript Asincronía, Prototipos y Clases',
      url: './assets/pdf/certificates/certificado_especialización_en_javascript__asincronía_prototipos_y_clases.pdf',
    },
    {
      id: 12,
      name: 'Fundamentos de Javascript',
      url: './assets/pdf/certificates/certificado_fundamentos_de_javascript.pdf',
    },
    {
      id: 13,
      name: 'Javascript Web Api, Componentes y Testing',
      url: './assets/pdf/certificates/certificado_javascript__web_api_componentes_y_testing.pdf',
    },
    {
      id: 14,
      name: 'Typescript',
      url: './assets/pdf/certificates/certificado_curso_de_typescript.pdf',
    },
  ];

  display: any[] = this.skills;
  gapSec: string = 'gap-12';

  ngOnInit(): void {
    const secObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skills-certs-list');
          document.querySelector('#section-tog')?.classList.add('toggler');
          (document.getElementById('statistics-git') as HTMLElement)
            .querySelectorAll('img')
            .forEach((img: HTMLImageElement) => {
              img.classList.add('statistics-git');
            });
        }
      });
    });
    secObs.observe(document.getElementById('skills-certs-list') as HTMLElement);
    if (this.toggleText === 'Skills') {
      let tooltipInterval = setInterval(() => {
        if (document.querySelectorAll('[data-tooltip-target]').length > 0) {
          document
            .querySelectorAll('[data-tooltip-target]')
            .forEach((tooltip) => {
              this.createInstances(tooltip as HTMLElement);
            });

          clearInterval(tooltipInterval);
        }
      }, 500);
    }
  }

  toggle() {
    this.toggleText = this.toggleText === 'Skills' ? 'Certificados' : 'Skills';
    this.display =
      this.toggleText === 'Skills' ? this.skills : this.certificates;
    this.gapSec = this.toggleText === 'Skills' ? 'gap-12' : 'gap-4';
    document.getElementById('section-tog-i')?.classList.toggle('rotate-180');
    if (this.toggleText === 'Skills') {
      let tooltipInterval = setInterval(() => {
        if (document.querySelectorAll('[data-tooltip-target]').length > 0) {
          document
            .querySelectorAll('[data-tooltip-target]')
            .forEach((tooltip) => {
              this.createInstances(tooltip as HTMLElement);
            });

          clearInterval(tooltipInterval);
        }
      }, 500);
    }
  }

  createInstances(tooltip: HTMLElement): void {
    // set the tooltip content element
    const $targetEl: HTMLElement = document.getElementById(
      tooltip.getAttribute('data-tooltip-target') as string
    ) as HTMLElement;

    // set the element that trigger the tooltip using hover or click
    const $triggerEl: HTMLElement = document.getElementById(
      tooltip.id
    ) as HTMLElement;

    const newTooltip: TooltipInterface = new Tooltip($targetEl, $triggerEl);

    // show the tooltip
    newTooltip.init();
  }
}
