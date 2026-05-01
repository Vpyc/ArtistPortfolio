import {ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import {PORTFOLIO_PAGES} from "../../../shared/constants/portfolio-pages";
import {PortfolioPage} from "../../../shared/interfaces/portfolio-page.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected categories: PortfolioPage[] = PORTFOLIO_PAGES;
}
