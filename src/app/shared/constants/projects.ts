import {Project} from "../interfaces/project.interface";
import {SectionTypeEnum} from "../enums/section-type.enum";
import {GalleryLayoutEnum} from "../enums/gallery-layout.enum";

export const PROJECTS: Record<string, Project> = {
  'interior-painting': {
    hero: {
      title: 'Интерьерная роспись',
      backgroundImage: 'assets/interier.png'
    },
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
    hero: {
      title: 'Интерьерная картина',
      backgroundImage: 'assets/paint.png'
    },
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/paint.png',
      }
    ],
  },

  'panels': {
    hero: {
      title: 'Абстрактное панно',
      backgroundImage: 'assets/panno.png'
    },
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/panno.png'
      }
    ],
  },

  'painting': {
    hero: {
      title: 'Живопись',
      backgroundImage: 'assets/live-paint.png'
    },
    sections: [
      {
        type: SectionTypeEnum.Image,
        title: 'Проект 1',
        image: 'assets/live-paint.png',
      },
    ],
  },
};
