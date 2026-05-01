import {PortfolioCategory} from "../enums/portfolio-category.enum";

export type Work = {
    id: string;
    title: string;
    category: PortfolioCategory;
    description: string;
    imageUrl: string;
};
