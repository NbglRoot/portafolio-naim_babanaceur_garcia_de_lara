import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutNgdlComponent } from "../../components/about-ngdl/about-ngdl.component";
import { CommonModule } from '@angular/common';
import { ExperiencesDisplayComponent } from "../../components/experiences-display/experiences-display.component";

@Component({
  selector: 'app-about-me',
  imports: [RouterLink, AboutNgdlComponent, CommonModule, ExperiencesDisplayComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  
}
