import {Component, input, InputSignal} from '@angular/core';
import {SplitSection} from "../../interfaces/section.interface";

@Component({
  selector: 'app-split-section',
  standalone: true,
  imports: [],
  templateUrl: './split-section.component.html',
  styleUrl: './split-section.component.scss'
})
export class SplitSectionComponent {
  public section: InputSignal<SplitSection> = input.required<SplitSection>();
}
