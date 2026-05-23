import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WorkSectionComponent} from "./components/work-section/work-section.component";
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";
import {HeroSectionComponent} from "../../shared/components/hero-section/hero-section.component";
import {RouterLink} from "@angular/router";
import {HOME_CONTENT} from "../../content/shared/home.content";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    WorkSectionComponent,
    LinkButtonSectionComponent,
    HeroSectionComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly content = HOME_CONTENT;

  scrollToWorks() {
    const el = document.getElementById('works');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
