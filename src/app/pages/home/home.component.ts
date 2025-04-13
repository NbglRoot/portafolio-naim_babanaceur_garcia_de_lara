import { Component, OnInit } from '@angular/core';
import { SkillsCertificatesSectionComponent } from '../../components/skills-certificates-section/skills-certificates-section.component';
import { Popover, type PopoverOptions } from 'flowbite';
import { ProjectsDisplayComponent } from "../../components/projects-display/projects-display.component";
import { AboutNgdlComponent } from '../../components/about-ngdl/about-ngdl.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ExperiencesDisplayComponent } from "../../components/experiences-display/experiences-display.component";
import { ArrowTopPageComponent } from "../../components/arrow-top-page/arrow-top-page.component";
@Component({
  selector: 'app-home',
  imports: [SkillsCertificatesSectionComponent, ProjectsDisplayComponent, AboutNgdlComponent, ContactFormComponent, ExperiencesDisplayComponent, ArrowTopPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const img_hero = document.querySelector('#hero_content_image img') as HTMLImageElement
    const img_hero_target = document.querySelector('#popover-default') as HTMLDivElement
    const optionsPopover: PopoverOptions = {
      placement: 'bottom',
      triggerType: 'hover',
      offset: 10,
  };
  new Popover(img_hero_target, img_hero, optionsPopover)
  }
}

