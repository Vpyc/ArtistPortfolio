  import {CategoryPage} from "../interfaces/category-page.interface";
  import {SectionTypeEnum} from "../enums/section-type.enum";

  export const CATEGORY_PAGES: Record<string, CategoryPage> = {
    'interior-painting': {
      hero: {
        title: 'Интерьерная роспись',
        backgroundImage: 'assets/interier.png'
      },
      projects: [
        {
          backgroundColor: '--background',
          textColor: '--primary',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????'
          }
          ]
        }
      ],
    },

    'interior-art': {
      hero: {
        title: 'Интерьерная картина',
        backgroundImage: 'assets/paint.png'
      },
      projects: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????'
            }
          ]
        }
      ],
    },

    'panels': {
      hero: {
        title: 'Абстрактное панно',
        backgroundImage: 'assets/panno.png'
      },
      projects: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????'
            }
          ]
        }
      ],
    },

    'painting': {
      hero: {
        title: 'Живопись',
        backgroundImage: 'assets/live-paint.png'
      },
      projects: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????'
            }
          ]
        }
      ],
    },
  };
