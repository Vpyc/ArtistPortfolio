import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {TimelineSection} from "../../interfaces/section.interface";
import {TimelineItem} from "../../interfaces/timeline-items.interface";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-timeline-section',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage
  ],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.scss'
})
export class TimelineSectionComponent {
  public section: InputSignal<TimelineSection> = input.required<TimelineSection>();

  public readonly timelineItems: Signal<TimelineItem[]> = computed(() => {
    return [...this.section().items].sort((a, b) => b.date.getFullYear() - a.date.getFullYear());
  })
}
