import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SideHeaderItem } from '../components-types';

@Component({
  selector: 'app-side-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-header.component.html',
  styleUrl: './side-header.component.css'
})
export class SideHeaderComponent implements OnInit {
  language: string = 'ES';
  languageAlert = false;
  SIDE_HEADER_ITEMS_ES: SideHeaderItem[] = [
    {
      icon: 'fa-home',
      label: 'Inicio',
      route: '/es/inicio',
    },
    {
      icon: 'fa-user',
      label: 'Sobre mí',
      route: '/es/sobre-mi',
    },
    {
      icon: 'fa-envelope',
      label: 'Contacta me',
      route: '/es/contacta-me',
    },
    {
      icon: 'fa-folder',
      label: 'Proyectos',
      route: '/es/proyectos',
    },  
  ]
  SIDE_HEADER_ITEMS_EN: SideHeaderItem[] = [
    {
      icon: 'fa-home',
      label: 'Home',
      route: '/en/home',
    },
    {
      icon: 'fa-user',
      label: 'About me',
      route: '/en/about-me',
    },
    {
      icon: 'fa-envelope',
      label: 'Contact me',
      route: '/en/contact-me',
    },
    {
      icon: 'fa-folder',
      label: 'Projects',
      route: '/en/projects',
    },  
  ]

  showLanguageAlert = false;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.language = localStorage.getItem('language') || 'ES';
  }

  changeLanguage($event: Event) {
    this.language = ($event.target as HTMLSelectElement).value;
    localStorage.setItem('language', this.language);
    this.showLanguageAlert = true;
    setTimeout(() => {
      document.getElementById('language-alert')?.classList.remove('opacity-100');
      document.getElementById('language-alert')?.classList.add('opacity-0');
    }, 3000);
    setTimeout(() => {
      this.showLanguageAlert = false;
    }, 3500);
    this.router.navigate([this.language === 'ES' ? '/es/inicio' : '/en/home']);
  }
}