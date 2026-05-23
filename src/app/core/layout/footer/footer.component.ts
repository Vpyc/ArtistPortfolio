import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FOOTER_CONTENT} from "../../../content/shared/footer.content";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly content = FOOTER_CONTENT;

  protected year: number = new Date().getFullYear();
}
