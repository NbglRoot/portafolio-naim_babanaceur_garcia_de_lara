import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-section',
  imports: [CommonModule],
  templateUrl: './contact-form-section.component.html',
  styleUrl: './contact-form-section.component.css'
})
export class ContactFormSectionComponent implements OnInit {
  componentLanguageEN = false;

  ngOnInit(): void {
    this.componentLanguageEN = localStorage.getItem('language') === 'EN' ? true : false;
  }
}
