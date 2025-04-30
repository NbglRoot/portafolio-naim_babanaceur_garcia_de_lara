import { Component } from '@angular/core';
import { AboutNgdlSectionComponent } from "../../../components/about-ngdl-section/about-ngdl-section.component";
import { ExperiencesSectionComponent } from "../../../components/experiences-section/experiences-section.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-sobre-mi',
  imports: [AboutNgdlSectionComponent, ExperiencesSectionComponent, FooterComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

}
