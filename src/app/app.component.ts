import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SideHeaderComponent } from './components/side-header/side-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router = router;
  }

  DEFAULT_LANGUAGE: string = '';

  ngOnInit(): void {
    initFlowbite()
    navigator.language === 'es-ES' ? localStorage.setItem('language', 'ES') : localStorage.setItem('language', 'EN')
    this.DEFAULT_LANGUAGE = localStorage.getItem('language') || 'ES';
    console.log(this.DEFAULT_LANGUAGE)
    window.addEventListener('load', (event) => {
      if(document.readyState === 'complete') {
        (document.getElementById('kt_loading_DOM') as HTMLElement).classList.add('hidden');
        (document.getElementById('kt_main_app') as HTMLElement).classList.remove('hidden');
        (document.getElementById('kt_language_alert') as HTMLElement).classList.remove('opacity-0');
        setTimeout(() => {
          (document.getElementById('kt_language_alert') as HTMLElement).classList.add('opacity-0');
        }, 4000);
        setTimeout(() => {
          (document.getElementById('kt_language_alert') as HTMLElement).classList.remove('flex');
          (document.getElementById('kt_language_alert') as HTMLElement).classList.add('hidden');
        }, 5000);
        if(window.localStorage.getItem('language') === 'ES' && !window.location.href.includes('/es/')) {
          this.router.navigate(['/es/inicio']);
        }
        if(window.localStorage.getItem('language') === 'EN' && !window.location.href.includes('/en/')) {
          this.router.navigate(['/en/home']);
        }
      }
    })
  }
}
