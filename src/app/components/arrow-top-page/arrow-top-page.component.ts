import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-top-page',
  imports: [],
  templateUrl: './arrow-top-page.component.html',
  styleUrl: './arrow-top-page.component.css'
})
export class ArrowTopPageComponent {
  goTop() {
    window.scrollTo(0, 0)
  }
}
