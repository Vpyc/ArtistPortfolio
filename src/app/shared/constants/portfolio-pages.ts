import {PortfolioPage} from "../interfaces/portfolio-page.interface";
import {PortfolioCategory} from "../enums/portfolio-category.enum";

export const PORTFOLIO_PAGES: PortfolioPage[] = [
  { slug: PortfolioCategory.InteriorPainting, title: 'Роспись интерьера' },
  { slug: PortfolioCategory.InteriorArt, title: 'Интерьерная картина' },
  { slug: PortfolioCategory.Panels, title: 'Абстрактное панно' },
  { slug: PortfolioCategory.Painting, title: 'Живопись' },
];
