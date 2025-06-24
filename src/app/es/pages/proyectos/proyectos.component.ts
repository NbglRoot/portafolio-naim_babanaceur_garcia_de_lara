import { Component } from '@angular/core';
import { ProyectosCComponent } from '../../../components/proyectos-c/proyectos-c.component';
import { FooterArrowComponent } from '../../../components/footer-arrow/footer-arrow.component';

@Component({
  selector: 'app-proyectos',
  imports: [ProyectosCComponent, FooterArrowComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {}
