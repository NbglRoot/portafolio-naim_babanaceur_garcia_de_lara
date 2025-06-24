import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements OnInit {
  ngOnInit(): void {
    const aboutObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aboutme-c-animation');
        }
      });
    });
    aboutObs.observe(document.querySelector('#aboutme-c') as HTMLElement);
  }
  NAIM_BGDL = {
    name: 'Naim Babanaceur García de Lara',
    age: new Date().getFullYear() - 2003,
    location: 'Jerez de la Frontera, Cadíz, Spain',
  };
}
