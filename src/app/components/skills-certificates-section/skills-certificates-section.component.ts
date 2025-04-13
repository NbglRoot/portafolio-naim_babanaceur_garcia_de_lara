import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-certificates-section',
  imports: [CommonModule],
  templateUrl: './skills-certificates-section.component.html',
  styleUrl: './skills-certificates-section.component.css'
})
export class SkillsCertificatesSectionComponent implements OnInit {
  showSection = true;

  ngOnInit(): void {
    this.initSKillCards();
    (document.querySelector('#toggle-showSection #btn_toggle') as HTMLInputElement)?.addEventListener('change', (e) => {
      e.preventDefault();
      this.showSection = !this.showSection;
      if(this.showSection) {
        this.initSKillCards();
      }
    })
  }

  initSKillCards() {
    let skillsContainer: NodeListOf<HTMLElement>;
    let progressBars: NodeListOf<HTMLElement>;
    setTimeout(() => {
      progressBars = document.querySelectorAll('.skills_bar') as NodeListOf<HTMLElement>
      skillsContainer = document.querySelectorAll('.progress_container') as NodeListOf<HTMLElement>
    }, 100);
    const observerCard = new IntersectionObserver(elements => {
    elements.forEach(card => {
      if(card.isIntersecting && this.showSection) {
        card.target.classList.remove('opacity-0')
        card.target.classList.add('opacity-100')
        card.target.classList.add('skill-container')
      }
    })
   })
    const observerBar = new IntersectionObserver(elements => {
    elements.forEach(bar => {
      if(bar.isIntersecting && this.showSection) {
        bar.target.classList.add('progress_bar_animation');
      }
    })
   })
   setTimeout(() => {
     progressBars.forEach(bar => observerBar.observe(bar))
     skillsContainer.forEach(card => observerCard.observe(card))
   }, 200);
  }

  skills = [
    { name: 'ANGULAR', level: 90, icon: 'fab fa-angular' },
    { name: 'GIT', level: 95, icon: 'fab fa-git' },
    { name: 'TAILWIND', level: 94, icon: 'fab fa-css3-alt' },
    { name: 'BOOTSTRAP', level: 98, icon: 'fab fa-bootstrap' },
    { name: 'TYPESCRIPT', level: 97, icon: 'fa-solid fa-t' },
    { name: 'REACT', level: 75, icon: 'fab fa-react' },
    { name: 'LAYOUT RESPONSIVO', level: 94, icon: 'fa-solid fa-tablet-screen-button' },
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
      name: 'Bootstrap 4 Maquetacion Responsive y Layout',
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
      name: 'Manipulacion del DOM desde Javascript',
      url: './assets/pdf/certificates/certificado_curso_de_manipulacion_del_dom_desde_javascript.pdf',
    },
    {
      id: 8,
      name: 'Maquetacion Web con CSS',
      url: './assets/pdf/certificates/certificado_curso_de_maquetacion_web_con_css.pdf',
    },
    {
      id: 9,
      name: 'Responsive Web Design',
      url: './assets/pdf/certificates/certificado_curso_de_responsive_web_design.pdf',
    },
    {
      id: 10,
      name: 'Ecmascript',
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
}
