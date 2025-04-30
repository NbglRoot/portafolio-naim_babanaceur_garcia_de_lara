import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Experiences } from '../components-types';

@Component({
  selector: 'app-experiences-section',
  imports: [CommonModule],
  templateUrl: './experiences-section.component.html',
  styleUrl: './experiences-section.component.css'
})
export class ExperiencesSectionComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    if(localStorage.getItem('language') === 'EN') {
      this.experiences = this.experiencesEN;
    }
    else {
      this.experiences = this.experiencesES;
    }
  }
  ngAfterViewInit(): void {
    const experiencesObeserver = new IntersectionObserver(entry => {
      entry.forEach(exp => {
        if(exp.isIntersecting) {
          exp.target.classList.add('experience__appear')
        }
      })
    })
    document.querySelectorAll('.experience_entry').forEach(exp => experiencesObeserver.observe(exp))
  }

  experiences: Experiences[] = [];

  experiencesES: Experiences[] = [
    {
      title: 'Desarrollador FullStack y Diseñador, WikiRoot',
      date: 'Junio 2025',
      description: 'Especializado en crear la aplicación web con las mejores prácticas e implementarlas en la aplicación web. Consiguiendo una puntuación del 98% tanto en: Layout Responsivo, SEO, Rendimiento y Accesibilidad.'
    },
    {
      title: 'Tecnico de Sistemas en MACROMATICA',
      date: 'Febrero 2022',
      description: 'Técnico en Sistemas Windows, Linux , macOS y Servidores, también montador y configurador de equipos personales y de oficina como ordenadores e impresoras'
    },
  ]
  experiencesEN: Experiences[] = [
    {
      title: 'FullStack Developer and Designer, WikiRoot',
      date: 'June 2025',
      description: 'Specialized in creating the web application with the best practices and implementing them in the web application. Achieving a score of 98% in: Responsive Layout, SEO, Performance and Accessibility.'
    },
    {
      title: 'Technical Support in MACROMATICA',
      date: 'February 2022',
      description: 'Technical in Systems Windows, Linux , macOS and Servers, also installing and configuring personal and office equipment such as computers and printers'
    },
  ]
}
