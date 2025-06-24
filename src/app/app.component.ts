import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/global/header/header.component';
import { FooterComponent } from './components/global/footer/footer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Spinner
        (
          document.getElementById('status-spinner') as HTMLDivElement
        ).style.display = 'none';
        // App Container
        (document.body as HTMLBodyElement).id = '';
        (
          document.getElementsByClassName('still-loading')[0] as HTMLElement
        ).classList.remove('still-loading');
      }, 2000);
    });
    setTimeout(() => {
      const emoji = `
      <picture>
        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp" type="image/webp">
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.gif" alt="🏆" width="32" height="32">
      </picture>
      `;
      Swal.fire({
        iconHtml: emoji,
        iconColor: 'green',
        title: '¡Logro Obtenido!',
        text: '¡Has estado mas de 5 minutos viendo mi portafolio!',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        theme: 'dark',
        toast: true,
        timer: 15000,
        timerProgressBar: true,
        position: 'bottom-start',
        width: 'fit-content',
      });
    }, 300000);
    setTimeout(() => {
      const emoji = `
      <picture>
        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp" type="image/webp">
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.gif" alt="🏆" width="42" height="42">
      </picture>
      `;
      Swal.fire({
        iconHtml: emoji,
        iconColor: 'green',
        title: '¡Logro Obtenido!',
        text: '¡Has estado mas de 10 minutos viendo mi portafolio!',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        theme: 'dark',
        toast: true,
        timer: 15000,
        timerProgressBar: true,
        position: 'bottom-start',
        width: 'fit-content',
      });
    }, 600000);
  }
}
