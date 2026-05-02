import {ChangeDetectionStrategy, Component, input, InputSignal, Type} from '@angular/core';
import {Section} from "../../models/sections.type";
import {SectionTypeEnum} from "../../enums/section-type.enum";
import {ImageSectionComponent} from "../image-section/image-section.component";
import {GallerySectionComponent} from "../gallery-section/gallery-section.component";
import {TextSectionComponent} from "../text-section/text-section.component";
import {SplitSectionComponent} from "../split-section/split-section.component";
import {NgComponentOutlet} from "@angular/common";

@Component({
  selector: 'app-section-renderer',
  standalone: true,
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './section-renderer.component.html',
  styleUrl: './section-renderer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionRendererComponent {
  sections: InputSignal<Section[]> = input.required<Section[]>();

  private sectionComponents: Record<SectionTypeEnum, Type<unknown>> = {
    [SectionTypeEnum.Image]: ImageSectionComponent,
    [SectionTypeEnum.Gallery]: GallerySectionComponent,
    [SectionTypeEnum.Text]: TextSectionComponent,
    [SectionTypeEnum.Split]: SplitSectionComponent,
  };

  protected getComponent(section: Section) {
    return this.sectionComponents[section.type];
  }

}
