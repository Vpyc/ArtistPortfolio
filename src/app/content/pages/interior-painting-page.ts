import {Page} from "../../shared/interfaces/page.interface";
import {getMediaUrl} from "../../shared/utils/media.utils";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";

export const INTERIOR_PAINTING_PAGE: Page = {
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
  ]
}
