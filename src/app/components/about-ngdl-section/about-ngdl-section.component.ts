import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ngdl-section',
  imports: [CommonModule],
  templateUrl: './about-ngdl-section.component.html',
  styleUrl: './about-ngdl-section.component.css'
})
export class AboutNgdlSectionComponent implements OnInit {
  componentLanguageEN = false;

  ngOnInit(): void {
    this.componentLanguageEN = localStorage.getItem('language') === 'EN' ? true : false;
  }
}
