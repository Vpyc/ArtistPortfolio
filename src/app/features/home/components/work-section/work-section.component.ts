import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {WorkService} from "../../../../shared/servicies/works.service";
import {Work} from "../../../../shared/models/work.type";

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSectionComponent {
  private readonly workService: WorkService = inject(WorkService);

  protected readonly works: Signal<Work[]> = this.workService.all;
}
