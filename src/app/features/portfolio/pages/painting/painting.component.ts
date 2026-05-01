import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-painting',
  standalone: true,
  imports: [],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaintingComponent {

}
