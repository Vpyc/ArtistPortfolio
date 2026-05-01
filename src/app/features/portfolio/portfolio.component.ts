import {ChangeDetectionStrategy, Component, computed, inject, Signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {PROJECTS} from "../../shared/constants/projects";
import {PortfolioCategorySlugEnum} from "../../shared/enums/portfolio-category-slug.enum";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {ImageSectionComponent} from "../../shared/components/image-section/image-section.component";
import {GallerySectionComponent} from "../../shared/components/gallery-section/gallery-section.component";
import {TextSectionComponent} from "../../shared/components/text-section/text-section.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ImageSectionComponent,
    GallerySectionComponent,
    TextSectionComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private route = inject(ActivatedRoute);

  private category = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('category')),
      map(cat => Object.values(PortfolioCategorySlugEnum).includes(cat as PortfolioCategorySlugEnum)
        ? cat as PortfolioCategorySlugEnum
        : PortfolioCategorySlugEnum.InteriorPainting
      )
    ),
    { initialValue: PortfolioCategorySlugEnum.InteriorPainting }
  );

  project = computed(() => PROJECTS[this.category()]);
  protected readonly SectionTypeEnum = SectionTypeEnum;
}
