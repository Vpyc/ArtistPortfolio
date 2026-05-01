import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen = false;

  categories = [
    { name: 'Интерьерная живопись', slug: 'interior-painting' },
    { name: 'Портреты', slug: 'portraits' },
    { name: 'Иллюстрации', slug: 'illustrations' },
  ];

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}
