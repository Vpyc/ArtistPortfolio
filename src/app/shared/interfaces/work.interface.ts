import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

export interface Work {
  id: string;
  title: string;
  category: PortfolioCategorySlugEnum;
  description: string;
  imageUrl: string;
}
