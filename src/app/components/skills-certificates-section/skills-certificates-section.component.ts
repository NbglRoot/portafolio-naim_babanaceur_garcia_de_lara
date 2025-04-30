import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Certificate, Skill } from '../components-types';

@Component({
  selector: 'app-skills-certificates-section',
  imports: [CommonModule],
  templateUrl: './skills-certificates-section.component.html',
  styleUrls: ['./skills-certificates-section.component.css']
})
export class SkillsCertificatesSectionComponent implements OnInit, AfterViewInit {
  componentLanguageEN = false;
  ngOnInit(): void {
    this.componentLanguageEN = localStorage.getItem('language') === 'EN' ? true : false;
  }
  
  ngAfterViewInit(): void {
    const skillsObserver = new IntersectionObserver(skills_cards => {
      skills_cards.forEach(skill => {
        if(skill.isIntersecting) {
          skill.target.classList.add('skill_card_animated')
        }
      })
    })
    document.querySelectorAll('.skill_card').forEach(skill_card => skillsObserver.observe(skill_card))
  }
  TOOGLE_SECTIONS_SKILLS = true;

  changeSection() {
    this.TOOGLE_SECTIONS_SKILLS = !this.TOOGLE_SECTIONS_SKILLS;
    (document.querySelector('.arrow-right-bounce') as HTMLElement).style.display = 'none';
    setTimeout(() => {
      (document.querySelectorAll('.skill_card') as NodeListOf<HTMLElement>)?.forEach(skill_card => skill_card.classList.add('skill_card_animated'));
    }, 100);
  }
  // Skills & Certificates
  skills: Skill[] = [
    { name: 'ANGULAR', level: 90, icon: 'fab fa-angular', animationDuration: '0.8s' },
    { name: 'GIT', level: 95, icon: 'fab fa-git', animationDuration: '0.9s' },
    { name: 'TAILWIND', level: 94, icon: 'fab fa-css3-alt', animationDuration: '1s' },
    { name: 'BOOTSTRAP', level: 98, icon: 'fab fa-bootstrap', animationDuration: '1.1s' },
    { name: 'TYPESCRIPT', level: 97, icon: 'fa-solid fa-t', animationDuration: '1.2s' },
    { name: 'REACT', level: 75, icon: 'fab fa-react', animationDuration: '1.3s' },
    { name: 'LAYOUT RESPONSIVO', nameEN: 'RESPONSIVE LAYOUT', level: 94, icon: 'fa-solid fa-tablet-screen-button', animationDuration: '1.4s' },
    { name: 'HTML5', level: 99, icon: 'fab fa-html5', animationDuration: '1.5s' },
    { name: 'CSS3', level: 96, icon: 'fab fa-css3', animationDuration: '1.6s' },
  ];
  certificates: Certificate[] = [
    {
      id: 1,
      name: 'Fundamentos de Angular',
      nameEN: 'Fundamentals of Angular',
      url: './assets/pdf/certificates/certificado_fundamentos_de_angular.pdf',
      animationDuration: '0.6s'
    },
    {
      id: 2,
      name: 'Git',
      nameEN: 'Git',
      url: './assets/pdf/certificates/certificado_curso_de_git.pdf',
      animationDuration: '0.7s'
    },
    {
      id: 3,
      name: 'Bootstrap 4 Componentes',
      nameEN: 'Bootstrap 4 Components',
      url: './assets/pdf/certificates/certificado_bootstrap_4__componentes.pdf',
      animationDuration: '0.8s'
    },
    {
      id: 4,
      name: 'Bootstrap 4 Maquetacion Responsive y Layout',
      nameEN: 'Bootstrap 4 Responsive Layout',
      url: './assets/pdf/certificates/certificado_bootstrap_4__maquetacion_responsive_y_layout.pdf',
      animationDuration: '0.9s'
    },
    {
      id: 5,
      name: 'Flexbox y CSS Grid',
      nameEN: 'Flexbox and CSS Grid',
      url: './assets/pdf/certificates/certificado_curso_de_flexbox_y_css_grid.pdf',
      animationDuration: '1s'
    },
    {
      id: 6,
      name: 'HTML5 y CSS3',
      nameEN: 'HTML5 and CSS3',
      url: './assets/pdf/certificates/certificado_curso_de_html5_y_css3.pdf',
      animationDuration: '1.1s'
    },
    {
      id: 7,
      name: 'Manipulacion del DOM desde Javascript',
      nameEN: 'Manipulation of the DOM from Javascript',
      url: './assets/pdf/certificates/certificado_curso_de_manipulacion_del_dom_desde_javascript.pdf',
      animationDuration: '1.2s'
    },
    {
      id: 8,
      name: 'Maquetacion Web con CSS',
      nameEN: 'Web Design with CSS',
      url: './assets/pdf/certificates/certificado_curso_de_maquetacion_web_con_css.pdf',
      animationDuration: '1.3s'
    },
    {
      id: 9,
      name: 'Responsive Web Design',
      nameEN: 'Responsive Web Design',
      url: './assets/pdf/certificates/certificado_curso_de_responsive_web_design.pdf',
      animationDuration: '1.4s'
    },
    {
      id: 10,
      name: 'Ecmascript',
      nameEN: 'Ecmascript',
      url: './assets/pdf/certificates/certificado_ecmascript.pdf',
      animationDuration: '1.5s'
    },
    {
      id: 11,
      name: 'Especialización en Javascript Asincronía, Prototipos y Clases',
      nameEN: 'Specialization in Javascript Asynchronous, Prototypes and Classes',
      url: './assets/pdf/certificates/certificado_especialización_en_javascript__asincronía_prototipos_y_clases.pdf',
      animationDuration: '1.6s'
    },
    {
      id: 12,
      name: 'Fundamentos de Javascript',
      nameEN: 'Fundamentals of Javascript',
      url: './assets/pdf/certificates/certificado_fundamentos_de_javascript.pdf',
      animationDuration: '1.7s'
    },
    {
      id: 13,
      name: 'Javascript Web Api, Componentes y Testing',
      nameEN: 'Javascript Web Api, Components and Testing',
      url: './assets/pdf/certificates/certificado_javascript__web_api_componentes_y_testing.pdf',
      animationDuration: '1.8s'
    },
    {
      id: 14,
      name: 'Typescript',
      nameEN: 'Typescript',
      url: './assets/pdf/certificates/certificado_curso_de_typescript.pdf',
      animationDuration: '1.9s'
    },
  ];
}
