  import {Page} from "../interfaces/page.interface";
  import {SectionTypeEnum} from "../enums/section-type.enum";
  import { getMediaUrl } from "../utils/media.utils";

  export const CATEGORY_PAGES: Record<string, Page> = {
    'interior-painting': {
      hero: {
        title: 'Интерьерная роспись',
        backgroundImage: getMediaUrl('interier.png')
      },
      groups: [
        {
          backgroundColor: '--background',
          textColor: '--primary',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: getMediaUrl('interier.png'),
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
                  src: getMediaUrl('interier.png'),
                },
                {
                  src: getMediaUrl('live-paint.png'),
                  featured: true
                },
                {
                  src: getMediaUrl('panno.png'),
                },
                {
                  src: getMediaUrl('paint.png'),
                  featured: true
                },
                {
                  src: getMediaUrl('interier.png'),
                },
                {
                  src: getMediaUrl('live-paint.png'),
                },
                {
                  src: getMediaUrl('panno.png'),
                },
                {
                  src: getMediaUrl('paint.png'),
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
              image: getMediaUrl('interier.png'),
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
                  src: getMediaUrl('interier.png'),
                  featured: true
                },
                {
                  src: getMediaUrl('live-paint.png'),
                },
                {
                  src: getMediaUrl('panno.png'),
                },
                {
                  src: getMediaUrl('paint.png'),
                  featured: true
                },
                {
                  src: getMediaUrl('interier.png'),
                },
                {
                  src: getMediaUrl('live-paint.png'),
                  featured: true
                },
                {
                  src: getMediaUrl('panno.png'),
                },
                {
                  src: getMediaUrl('paint.png'),
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
        backgroundImage: getMediaUrl('paint.png')
      },
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: getMediaUrl('interier.png'),
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
        backgroundImage: getMediaUrl('panno.png')
      },
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: getMediaUrl('interier.png'),
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
        backgroundImage: getMediaUrl('live-paint.png')
      },
      groups: [
        {
          backgroundColor: '--card',
          textColor: '--background',
          sections: [
            {
              type: SectionTypeEnum.Split,
              image: getMediaUrl('interier.png'),
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
