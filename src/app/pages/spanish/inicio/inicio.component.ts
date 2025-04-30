import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initPopovers } from 'flowbite';
import { SkillsCertificatesSectionComponent } from "../../../components/skills-certificates-section/skills-certificates-section.component";
import { ExperiencesSectionComponent } from "../../../components/experiences-section/experiences-section.component";
import { ProjectsSectionComponent } from "../../../components/projects-section/projects-section.component";
import { AboutNgdlSectionComponent } from "../../../components/about-ngdl-section/about-ngdl-section.component";
import { ContactFormSectionComponent } from "../../../components/contact-form-section/contact-form-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  imports: [SkillsCertificatesSectionComponent, ExperiencesSectionComponent, ProjectsSectionComponent, AboutNgdlSectionComponent, ContactFormSectionComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    initPopovers();
  }
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) {
        (document.getElementById('arrow_top_script') as HTMLElement)?.classList.remove('opacity-0');
        (document.getElementById('arrow_top_script') as HTMLElement)?.classList.add('cursor-pointer');
        (document.getElementById('arrow-more-content') as HTMLElement)?.classList.add('opacity-0');
      } else {
        (document.getElementById('arrow_top_script') as HTMLElement)?.classList.add('opacity-0');
        (document.getElementById('arrow_top_script') as HTMLElement)?.classList.remove('cursor-pointer');
        (document.getElementById('arrow-more-content') as HTMLElement)?.classList.remove('opacity-0');
      }
    });

    (document.getElementById('arrow_top_script') as HTMLElement).addEventListener('click', () => {
      window.scrollTo(0, 0)
    })
  }
}
