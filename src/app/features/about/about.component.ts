import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ABOUT_PAGE} from "../../shared/constants/about-page";
import {PageRendererComponent} from "../../shared/components/page-renderer/page-renderer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageRendererComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  protected aboutPage = ABOUT_PAGE;
}
