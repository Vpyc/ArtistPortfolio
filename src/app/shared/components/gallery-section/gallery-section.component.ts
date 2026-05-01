import {Component, input, InputSignal} from '@angular/core';
import {GallerySection} from "../../interfaces/section.interface";

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.scss'
})
export class GallerySectionComponent {
  public section: InputSignal<GallerySection> = input.required<GallerySection>();
}
