import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent implements OnInit {
  ngOnInit(): void {
    const contactObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('contact-info-animation');
            document
              .getElementById('contact-form')
              ?.classList.add('contact-form-animation');
          }, 500);
        }
      });
    });
    contactObs.observe(document.getElementById('contact-info') as HTMLElement);
  }
  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email);
    Swal.fire({
      icon: 'success',
      title: 'Se ha copiado el email a su portapapeles.',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      theme: 'dark',
      toast: true,
      position: 'top',
    }).then(() => {
      const emojiYES = `
      <picture>
        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/270d_1f3fc/512.webp" class="inline-block ms-0.5" type="image/webp">
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/270d_1f3fc/512.gif" alt="✍" class="inline-block ms-0.5" width="26" height="26">
      </picture>
      `;
      const emojiNO = `
      <picture>
        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp" class="inline-block ms-0.5" type="image/webp">
        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif" alt="😭" class="inline-block ms-0.5" width="26" height="26">
      </picture>
      `;
      Swal.fire({
        icon: 'info',
        text: 'Desea enviar un correo electrónico en este instante?',
        showConfirmButton: true,
        confirmButtonText: `Si, ${emojiYES}`,
        cancelButtonText: `No, ${emojiNO}`,
        showCancelButton: true,
        theme: 'dark',
        position: 'center',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            'mailto:naimbgdl2003@gmail.com?subject=Consulta%20desde%20Portafolio',
            '_blank'
          );
        }
      });
    });
  }
}
