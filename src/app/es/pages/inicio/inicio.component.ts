import { Component, OnInit } from '@angular/core';
import { FooterArrowComponent } from '../../../components/footer-arrow/footer-arrow.component';
import { ExperiencesCComponent } from '../../../components/experiences-c/experiences-c.component';
import { SkillsCertsComponent } from '../../../components/skills-certs/skills-certs.component';
import { ProyectosCComponent } from '../../../components/proyectos-c/proyectos-c.component';
import { AboutMeComponent } from '../../../components/about-me/about-me.component';
import { ContactMeComponent } from '../../../components/contact-me/contact-me.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule,
    FooterArrowComponent,
    ExperiencesCComponent,
    SkillsCertsComponent,
    ProyectosCComponent,
    AboutMeComponent,
    ContactMeComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit {
  ngOnInit(): void {
    const arrow = document.getElementById('arrow-to_top') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        arrow.classList.remove('opacity-0');
      } else {
        arrow.classList.add('opacity-0');
      }
    });
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
