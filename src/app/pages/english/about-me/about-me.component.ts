import { Component } from '@angular/core';
import { ExperiencesSectionComponent } from "../../../components/experiences-section/experiences-section.component";
import { AboutNgdlSectionComponent } from "../../../components/about-ngdl-section/about-ngdl-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-about-me',
  imports: [ExperiencesSectionComponent, AboutNgdlSectionComponent, FooterComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
