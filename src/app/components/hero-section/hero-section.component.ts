import { Component } from '@angular/core';
import {works} from "../../data/works";
import {Work} from "../../data/types/work.type";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  protected works: Work[] = works;
}
