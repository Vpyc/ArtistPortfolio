import { Component } from '@angular/core';
import {works} from "../../data/works";
import {Work} from "../../data/types/work.type";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss'
})
export class WorkSectionComponent {
  protected works: Work[] = works.filter((_, i) => i !== 4);
}
