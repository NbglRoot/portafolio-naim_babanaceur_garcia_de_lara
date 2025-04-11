import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences-display',
  imports: [CommonModule],
  templateUrl: './experiences-display.component.html',
  styleUrl: './experiences-display.component.css'
})
export class ExperiencesDisplayComponent {
  experiences = [
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
}
