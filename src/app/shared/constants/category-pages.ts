  import {Page} from "../interfaces/page.interface";
  import {SectionTypeEnum} from "../enums/section-type.enum";

  export const CATEGORY_PAGES: Record<string, Page> = {
    'interior-painting': {
      hero: {
        title: 'Интерьерная роспись',
        backgroundImage: 'assets/interier.png'
      },
      groups: [
        {
          backgroundColor: '--background',
          textColor: '--primary',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????',
              layout: {
                splitLine: true,
              }
            },
            {
              type: SectionTypeEnum.Gallery,
              images: [
                'assets/interier.png',
                'assets/live-paint.png',
                'assets/panno.png',
                'assets/paint.png',
                'assets/interier.png',
                'assets/live-paint.png',
                'assets/panno.png',
                'assets/paint.png',
              ],
              layout: {
                columns: 3,
                gap: 36,
              }
            }
          ]
        },
        {
          backgroundColor: '--primary-foreground',
          textColor: '--primary',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????',
              layout: {
                splitLine: true,
              }
            },
            {
              type: SectionTypeEnum.Gallery,
              images: [
                'assets/interier.png',
                'assets/live-paint.png',
                'assets/panno.png',
                'assets/paint.png',
                'assets/interier.png',
                'assets/live-paint.png',
                'assets/panno.png',
                'assets/paint.png',
              ],
              layout: {
                columns: 3,
                gap: 36,
              }
            }
          ]
        },
      ],
    },

    'interior-art': {
      hero: {
        title: 'Интерьерная картина',
        backgroundImage: 'assets/paint.png'
      },
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????',
              layout: {
                splitLine: true,
              }
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
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????',
              layout: {
                splitLine: true,
              }
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
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: 'assets/interier.png',
              title: 'Аквапарк "Мореон"',
              description: 'Победа наконец то может быть пожалуйста????',
              layout: {
                splitLine: true,
              }
            }
          ]
        }
      ],
    },
  };
