import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected isOpen: boolean = false;

  protected categories = [
    { name: 'Интерьерная живопись', slug: 'interior-painting' },
    { name: 'Портреты', slug: 'portraits' },
    { name: 'Иллюстрации', slug: 'illustrations' },
  ];

  protected openMenu(): void {
    this.isOpen = true;
  }

  protected closeMenu(): void {
    this.isOpen = false;
  }
}
