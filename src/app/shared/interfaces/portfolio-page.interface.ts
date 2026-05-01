import {PortfolioCategory} from "../enums/portfolio-category.enum";

export interface PortfolioPage {
  slug: PortfolioCategory;
  title: string;
}
