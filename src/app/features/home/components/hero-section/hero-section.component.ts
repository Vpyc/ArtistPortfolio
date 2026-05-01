import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {WorkService} from "../../../../shared/servicies/works.service";
import {Work} from "../../../../shared/models/work.type";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  private readonly workService: WorkService = inject(WorkService);

  protected readonly hero: Signal<Work> = this.workService.hero;
}
