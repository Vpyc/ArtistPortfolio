import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {PORTFOLIO_PAGES} from "../../../shared/constants/portfolio-pages";
import {PortfolioPage} from "../../../shared/interfaces/portfolio-page.interface";

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

  protected categories: PortfolioPage[] = PORTFOLIO_PAGES;

  protected openMenu(): void {
    this.isOpen = true;
  }

  protected closeMenu(): void {
    this.isOpen = false;
  }
}
