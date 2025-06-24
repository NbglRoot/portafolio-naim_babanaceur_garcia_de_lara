import { Component } from '@angular/core';
import { ContactMeComponent } from '../../../components/contact-me/contact-me.component';
import { FooterArrowComponent } from '../../../components/footer-arrow/footer-arrow.component';

@Component({
  selector: 'app-contactame',
  imports: [ContactMeComponent, FooterArrowComponent],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css',
})
export class ContactameComponent {}
