import {Page} from "../../shared/interfaces/page.interface";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {MEDIA} from "../media/media.registry";

export const INTERIOR_PAINTING_PAGE: Page = {
  hero: {
    title: 'Интерьерная роспись',
    backgroundImage: MEDIA.interiorPainting.hero
  },
  groups: [
    {
      backgroundColor: '--background',
      textColor: '--primary',
      sections: [
        {
          type: SectionTypeEnum.Split,
          image: MEDIA.interiorPainting.gallery1,
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
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
              featured: true
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
              featured: true
            },
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
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
          image: MEDIA.interiorPainting.gallery1,
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
              src: MEDIA.interiorPainting.gallery1,
              featured: true
            },
            {
              src: MEDIA.paintings.livePaint,
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
              featured: true
            },
            {
              src: MEDIA.interiorPainting.gallery1,
            },
            {
              src: MEDIA.paintings.livePaint,
              featured: true
            },
            {
              src: MEDIA.panels.main,
            },
            {
              src: MEDIA.paintings.main,
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
