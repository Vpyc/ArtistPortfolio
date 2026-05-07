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
                {
                  src: 'assets/interier.png',
                },
                {
                  src: 'assets/live-paint.png',
                  featured: true
                },
                {
                  src: 'assets/panno.png',
                },
                {
                  src: 'assets/paint.png',
                  featured: true
                },
                {
                  src: 'assets/interier.png',
                },
                {
                  src: 'assets/live-paint.png',
                },
                {
                  src: 'assets/panno.png',
                },
                {
                  src: 'assets/paint.png',
                },
              ],
              layout: {
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
                {
                  src: 'assets/interier.png',
                  featured: true
                },
                {
                  src: 'assets/live-paint.png',
                },
                {
                  src: 'assets/panno.png',
                },
                {
                  src: 'assets/paint.png',
                  featured: true
                },
                {
                  src: 'assets/interier.png',
                },
                {
                  src: 'assets/live-paint.png',
                  featured: true
                },
                {
                  src: 'assets/panno.png',
                },
                {
                  src: 'assets/paint.png',
                  featured: true
                },
              ],
              layout: {
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
