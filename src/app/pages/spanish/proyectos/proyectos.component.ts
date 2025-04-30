import { Component } from '@angular/core';
import { ProjectsSectionComponent } from "../../../components/projects-section/projects-section.component";

@Component({
  selector: 'app-proyectos',
  imports: [ProjectsSectionComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  activateAnimation = true;
}
