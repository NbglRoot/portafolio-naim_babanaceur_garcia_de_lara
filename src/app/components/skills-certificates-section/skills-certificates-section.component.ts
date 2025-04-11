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
    this.showSection = sessionStorage.getItem('showSection') === 'true';
   (document.querySelector('#toggle-showSection #btn_toggle') as HTMLInputElement)?.addEventListener('change', (e) => {
    e.preventDefault();
    this.showSection = !this.showSection;
    sessionStorage.setItem('showSection', this.showSection.toString());
   })
   window.addEventListener('scroll', () => {
    const all_skills_bars = document.querySelectorAll('.skills_bar') as NodeListOf<HTMLDivElement>
    switch(true) {
      // desktop animation
      case window.innerWidth > 1175:
        if(window.scrollY >= 125) {
          all_skills_bars.forEach(bar => {
            bar.classList.add('progress_bar_animation')
            bar.classList.add('progress_bar_animation')
          })
        }
      break;
      // tablet animation
      case window.innerWidth <= 1175:
        if(window.scrollY >= 200) {
          all_skills_bars.forEach(bar => {
            bar.classList.add('progress_bar_animation')
            bar.classList.add('progress_bar_animation')
          })
        }
      break;
      // mobile animation
      case window.innerWidth <= 768:
        if(window.scrollY >= 594) {
          all_skills_bars.forEach(bar => {
            bar.classList.add('progress_bar_animation')
            bar.classList.add('progress_bar_animation')
          })
        }
      break;
    }
   })
  }
  skills = [
    { name: 'ANGULAR', level: 90 },
    { name: 'GIT', level: 95 },
    { name: 'TAILWIND', level: 94 },
    { name: 'BOOTSTRAP', level: 98 },
    { name: 'TYPESCRIPT', level: 97 },
    { name: 'LAYOUT RESPONSIVO', level: 94 },
    { name: 'HTML5', level: 99 },
    { name: 'CSS3', level: 96 },
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
