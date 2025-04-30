import { Component } from '@angular/core';
import { ProjectsSectionComponent } from "../../../components/projects-section/projects-section.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectsSectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  activateAnimation: boolean = true;

}
