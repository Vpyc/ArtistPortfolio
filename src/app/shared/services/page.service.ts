import {Injectable} from "@angular/core";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";
import {Page} from "../interfaces/page.interface";
import {PAGE_MAPPING} from "../../content/pages/page-mapping";

@Injectable({ providedIn: 'root' })
export class PageService {
  getPortfolioPage(slug: PortfolioCategorySlugEnum): Page {
    return PAGE_MAPPING[slug];
  }
}
