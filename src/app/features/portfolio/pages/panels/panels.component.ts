import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-panels',
  standalone: true,
  imports: [],
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelsComponent {

}
