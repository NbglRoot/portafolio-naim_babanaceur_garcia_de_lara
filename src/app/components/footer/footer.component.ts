import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  language: string = 'ES';

  ngOnInit(): void {
    this.language = localStorage.getItem('language') || 'ES';
  }
} 
