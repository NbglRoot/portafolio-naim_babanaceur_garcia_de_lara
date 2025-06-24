import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from '../../../components/about-me/about-me.component';
import { ExperiencesCComponent } from '../../../components/experiences-c/experiences-c.component';
import Swal from 'sweetalert2';
import { FooterArrowComponent } from '../../../components/footer-arrow/footer-arrow.component';

@Component({
  selector: 'app-sobre-mi',
  imports: [AboutMeComponent, ExperiencesCComponent, FooterArrowComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
})
export class SobreMiComponent implements OnInit {
  ngOnInit(): void {
    const arrow = document.getElementById('arrow-to_top') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        arrow.classList.remove('opacity-0');
      } else {
        arrow.classList.add('opacity-0');
      }
    });
  }

  showImageBig(e: Event): void {
    const imageSRC = (e.target as HTMLImageElement).src;
    Swal.fire({
      imageUrl: imageSRC,
      imageWidth: 500,
      imageHeight: 500,
      imageAlt: 'Imagen de Naim Babanaceur García de Lara',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar',
      theme: 'dark',
      customClass: {
        image:
          'object-cover rounded-md bg-gradient-to-b from-gray-400 to-gray-600',
      },
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
