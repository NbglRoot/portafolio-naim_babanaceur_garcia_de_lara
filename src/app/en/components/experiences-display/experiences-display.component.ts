import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences-display-es',
  imports: [CommonModule],
  templateUrl: './experiences-display.component.html',
  styleUrl: './experiences-display.component.css'
})
export class ExperiencesDisplayComponent implements OnInit {

  ngOnInit() {
    const section = document.querySelector('#experiences-section') as HTMLElement
    const observer = new IntersectionObserver(elements => {
      elements.forEach(element => {
        if(element.isIntersecting) {
          element.target.classList.add('animate__animated', 'animate__slideInLeft');
        }
      })
    })
    observer.observe(section)
  }

  experiences = [
    {
      title: 'FullStack Developer and Designer, WikiRoot',
      date: 'June 2025',
      description: 'Specialized in creating web applications with best practices and implementing them in the web application. Achieving a score of 98% in: Responsive Layout, SEO, Performance and Accessibility.'
    },
    {
      title: 'Systems Technician at MACROMATICA',
      date: 'February 2022',
      description: 'Technician in Windows, Linux, macOS and Server Systems, also a personal and office computer and printer assembler and configurator.'
    },
  ]
}
