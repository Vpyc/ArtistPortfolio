import {computed, inject, Injectable, Signal} from "@angular/core";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";
import {PageService} from "./page.service";
import {PortfolioPreview} from "../interfaces/portfolio-preview.interface";
import {PREVIEW_DESCRIPTION_MAP} from "../../content/shared/home.content";

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly pageService = inject(PageService);

  public readonly previews: Signal<PortfolioPreview[]> = computed(() => {
    return Object.values(PortfolioCategorySlugEnum)
      .map(slug => {

        const page = this.pageService.getPortfolioPage(slug);

        return {
          slug,
          title: page.hero?.title ?? '',
          imageUrl: page.hero?.backgroundImage ?? '',
          description: PREVIEW_DESCRIPTION_MAP[slug],
        };
      });
  });
}
