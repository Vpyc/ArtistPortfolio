import {Project} from "../interfaces/project.interface";
import {SectionTypeEnum} from "../enums/section-type.enum";
import {GalleryLayoutEnum} from "../enums/gallery-layout.enum";
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

export const PROJECTS: Record<string, Project> = {
  'interior-painting': {
    slug: PortfolioCategorySlugEnum.InteriorPainting,
    title: 'Роспись интерьера',
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/interier.png',
      },
      {
        type: SectionTypeEnum.Gallery,
        layout: GalleryLayoutEnum.Grid,
        images: [
          'assets/interier.png',
          'assets/interier.png',
        ],
      },
      {
        type: SectionTypeEnum.Text,
        text: 'Описание проекта...',
      },
    ],
  },

  'interior-art': {
    slug: PortfolioCategorySlugEnum.InteriorArt,
    title: 'Интерьерная картина',
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/paint.png',
      }
    ],
  },

  'panels': {
    slug: PortfolioCategorySlugEnum.Panels,
    title: 'Абстрактное панно',
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/panno.png'
      }
    ],
  },

  'painting': {
    slug: PortfolioCategorySlugEnum.Painting,
    title: 'Живопись',
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/live-paint.png',
      },
    ],
  },
};
