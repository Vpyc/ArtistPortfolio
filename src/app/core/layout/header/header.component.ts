import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import {PORTFOLIO_CATEGORIES} from "../../../shared/constants/portfolio-categories";
import {PortfolioCategory} from "../../../shared/interfaces/portfolio-category.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected categories: PortfolioCategory[] = PORTFOLIO_CATEGORIES;

  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
