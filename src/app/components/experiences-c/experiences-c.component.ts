import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiences-c',
  imports: [CommonModule],
  templateUrl: './experiences-c.component.html',
  styleUrl: './experiences-c.component.css',
})
export class ExperiencesCComponent implements OnInit {
  ngOnInit(): void {
    const expObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('experiences-c');
          const cards = document.querySelectorAll('ol li');
          cards.forEach((card) => {
            card.querySelector('time')?.classList.add('exp-time');
            card.querySelector('h3')?.classList.add('exp-title');
            card.querySelector('p')?.classList.add('exp-p');
          });
        }
      });
    });

    expObs.observe(document.querySelector('ol') as HTMLElement);
  }
  experiences = [
    {
      title:
        'Desarrollador Front-End en Areea – Hardware & Software developers.',
      date: 'Julio 2025',
      description:
        'Especializado en crear la aplicación web (dashboards) con las mejores prácticas. Creando dashboards con JQuery Usando BootStrap con el tema Metronic. Manteniendo limpieza y documentación en el código con JSDoc.',
      imageSrc: './assets/images/areea_logo.png',
    },
    {
      title: 'Desarrollador FullStack y Diseñador en WikiRoot.',
      date: 'Mayo 2025',
      description:
        'Especializado en crear la aplicación web con las mejores prácticas e implementarlas en la aplicación web. Consiguiendo una puntuación del 98% tanto en: Layout Responsivo, SEO, Rendimiento y Accesibilidad.',
      imageSrc: './assets/images/wikirooticon.png',
    },
    {
      title: 'Técnico de Sistemas en MACROMATICA.',
      date: 'Febrero 2022',
      description:
        'Técnico en Sistemas Windows, Linux , macOS y Servidores, también montador y configurador de equipos personales y de oficina como ordenadores e impresoras.',
      imageSrc: './assets/images/macro_logo.jpg',
    },
  ];

  checkExp(e: Event): void {
    e.preventDefault();
    const titleText = (e.target as HTMLHeadingElement).textContent?.trim();
    const titleImageSrc = (e.target as HTMLHeadingElement).getAttribute(
      'title-image'
    );
    Swal.fire({
      imageUrl: titleImageSrc,
      imageAlt: titleText,
      title: titleText,
      html: `<p class="text-start font-mono">${
        this.experiences.find((exp) => exp.title === titleText)?.description
      }</p>`,
      showConfirmButton: true,
      confirmButtonText: 'Cerrar',
      theme: 'dark',
      customClass: {
        title: 'text-md font-bold font-mono',
        image:
          'object-cover rounded-md bg-gradient-to-b from-gray-400 to-gray-600',
      },
    });
  }
}
