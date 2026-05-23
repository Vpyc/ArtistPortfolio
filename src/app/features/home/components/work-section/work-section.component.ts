import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {RevealDirective} from "../../../../shared/directives/reveal.directive";
import {PortfolioPreview} from "../../../../shared/interfaces/portfolio-preview.interface";
import {PortfolioService} from "../../../../shared/services/portfolio.service";

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RevealDirective
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSectionComponent {
  private readonly previewService: PortfolioService = inject(PortfolioService);

  protected readonly previews: Signal<PortfolioPreview[]> = this.previewService.previews;
}
