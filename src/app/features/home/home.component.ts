import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {WorkSectionComponent} from "./components/work-section/work-section.component";
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";
import {HeroSectionComponent} from "../../shared/components/hero-section/hero-section.component";
import {WorkService} from "../../shared/services/works.service";
import {Work} from "../../shared/interfaces/work.interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WorkSectionComponent,
    LinkButtonSectionComponent,
    HeroSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly workService: WorkService = inject(WorkService);

  protected readonly hero: Signal<Work> = this.workService.hero;
}
