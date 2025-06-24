import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-arrow',
  imports: [],
  templateUrl: './footer-arrow.component.html',
  styleUrl: './footer-arrow.component.css',
})
export class FooterArrowComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const arrow = document.querySelector('footer') as HTMLElement;
      if (arrow) {
        if (
          window.scrollY >
          (document.querySelector('main') as HTMLElement).scrollHeight - 1150
        ) {
          arrow.classList.add('opacity-0');
        } else {
          arrow.classList.remove('opacity-0');
        }
      }
    });
  }
}
