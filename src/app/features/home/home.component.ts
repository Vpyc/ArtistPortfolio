import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroSectionComponent} from "./components/hero-section/hero-section.component";
import {WorkSectionComponent} from "./components/work-section/work-section.component";
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WorkSectionComponent,
    LinkButtonSectionComponent,
    HeroSectionComponent,
    WorkSectionComponent,
    LinkButtonSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
