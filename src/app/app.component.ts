import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from "flowbite";
import { SideHeaderComponent } from './components/side-header/side-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  PAGE_STATUS = {
    status: false,
  }

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    initFlowbite();
   document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
      this.PAGE_STATUS.status = true;
      if(localStorage.getItem('language') == 'en' && !location.href.includes('/en/')) {
        this.router.navigate(['/en/home']);
      }
      console.clear();
    }, 500);
   })
  }
}