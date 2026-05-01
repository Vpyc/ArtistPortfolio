import {PortfolioPage} from "../interfaces/portfolio-page.interface";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

export const PORTFOLIO_PAGES: PortfolioPage[] = [
  { slug: PortfolioCategorySlugEnum.InteriorPainting, title: 'Роспись интерьера' },
  { slug: PortfolioCategorySlugEnum.InteriorArt, title: 'Интерьерная картина' },
  { slug: PortfolioCategorySlugEnum.Panels, title: 'Абстрактное панно' },
  { slug: PortfolioCategorySlugEnum.Painting, title: 'Живопись' },
];
