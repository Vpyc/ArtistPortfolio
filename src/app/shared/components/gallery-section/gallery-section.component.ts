import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {GallerySection} from "../../interfaces/section.interface";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss'
})
export class GallerySectionComponent {
  public section: InputSignal<GallerySection> = input.required<GallerySection>();

  protected readonly columns: Signal<number> = computed(() => {
      return this.section().layout?.columns ?? 3;
    }
  )

  protected readonly gap: Signal<number> = computed(() => {
      return this.section().layout?.gap ?? 3;
    }
  )
}
