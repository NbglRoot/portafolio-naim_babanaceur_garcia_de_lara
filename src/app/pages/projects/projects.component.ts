import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsDisplayComponent } from "../../components/projects-display/projects-display.component";

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ProjectsDisplayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {
  
}
