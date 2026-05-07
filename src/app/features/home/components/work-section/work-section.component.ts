import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {WorkService} from "../../../../shared/services/works.service";
import {Work} from "../../../../shared/interfaces/work.interface";
import {RouterLink} from "@angular/router";
import {RevealDirective} from "../../../../shared/directives/reveal.directive";

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
  private readonly workService: WorkService = inject(WorkService);

  protected readonly works: Signal<Work[]> = this.workService.all;
}
