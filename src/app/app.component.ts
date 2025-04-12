import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  ngOnInit(): void {
    initFlowbite();
   document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
      this.PAGE_STATUS.status = true;
      console.clear();
    }, 500);
   })
  }
}
