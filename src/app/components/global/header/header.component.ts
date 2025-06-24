import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  currentWorldTime: Date = new Date();
  ngOnInit(): void {
    const header = document.querySelector('header') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('backdrop-blur-md');
        header.classList.remove('p-6');
        header.classList.add('p-2');
        header.classList.add('shadow-md');
        header.classList.add('px-4');
        (
          header.querySelector('#header-drawer-btn svg') as SVGElement
        ).classList.add('scale-75');
      } else {
        header.classList.remove('backdrop-blur-md');
        header.classList.add('p-6');
        header.classList.remove('p-2');
        header.classList.remove('shadow-md');
        header.classList.remove('px-4');
        (
          header.querySelector('#header-drawer-btn svg') as SVGElement
        ).classList.remove('scale-75');
      }
    });

    setInterval(() => {
      this.currentWorldTime = new Date();
    }, 1000);

    (
      document.querySelectorAll('header nav a') as NodeListOf<HTMLLinkElement>
    ).forEach((link) => {
      link.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'instant',
        });
      });
    });
  }
}
