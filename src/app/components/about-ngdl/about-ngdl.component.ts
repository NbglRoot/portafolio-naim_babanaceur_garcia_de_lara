import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ngdl',
  imports: [],
  templateUrl: './about-ngdl.component.html',
  styleUrl: './about-ngdl.component.css'
})
export class AboutNgdlComponent implements OnInit {
  ngOnInit(): void {
    const section = document.querySelector('#about-section') as HTMLElement;
    const observer = new IntersectionObserver(elements => {
      elements.forEach(element => {
        if(element.isIntersecting) {
          element.target.classList.remove('translate-x-[20rem]', 'opacity-0');
          element.target.classList.add('translate-x-0');
        }
      })
    })
    observer.observe(section)
  }
  NAIM_BGDL = {
    name: 'Naim Babanaceur García de Lara',
    age: 22,
    location: 'Jerez de la Frontera, Cadíz, Spain',
  }
}
