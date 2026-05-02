import {ChangeDetectionStrategy, Component, computed, inject, Type} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {CATEGORY_PAGES} from "../../shared/constants/category-pages";
import {PortfolioCategorySlugEnum} from "../../shared/enums/portfolio-category-slug.enum";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {ImageSectionComponent} from "../../shared/components/image-section/image-section.component";
import {GallerySectionComponent} from "../../shared/components/gallery-section/gallery-section.component";
import {TextSectionComponent} from "../../shared/components/text-section/text-section.component";
import {HeroSectionComponent} from "../../shared/components/hero-section/hero-section.component";
import {HeroSizeEnum} from "../../shared/enums/hero-size.enum";
import {SplitSectionComponent} from "../../shared/components/split-section/split-section.component";
import {Section} from "../../shared/models/sections.type";
import {NgComponentOutlet} from "@angular/common";
import {LinkButtonSectionComponent} from "../../shared/components/link-button-section/link-button-section.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroSectionComponent,
    NgComponentOutlet,
    LinkButtonSectionComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent {
  private route = inject(ActivatedRoute);

  private sectionComponents: Record<SectionTypeEnum, Type<unknown>> = {
    [SectionTypeEnum.Image]: ImageSectionComponent,
    [SectionTypeEnum.Gallery]: GallerySectionComponent,
    [SectionTypeEnum.Text]: TextSectionComponent,
    [SectionTypeEnum.Split]: SplitSectionComponent,
  };

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

  protected getComponent(section: Section) {
    return this.sectionComponents[section.type];
  }

  categoryPage = computed(() => CATEGORY_PAGES[this.category()]);
  protected readonly HeroSizeEnum = HeroSizeEnum;
}
