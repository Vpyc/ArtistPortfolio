import {Page} from "../../shared/interfaces/page.interface";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {MEDIA} from "../media/media.registry";

export const INTERIOR_ART_PAGE: Page = {
  hero: {
    title: 'Интерьерная картина',
    backgroundImage: MEDIA.paintings.main
  },
  groups: [
    {
      backgroundColor: '--card',
      textColor: '--background',
      sections: [
        {
          type: SectionTypeEnum.Split,
          image: MEDIA.interiorPainting.gallery1,
          title: 'Аквапарк "Мореон"',
          description: 'Победа наконец то может быть пожалуйста????',
          layout: {
            splitLine: true,
          }
        }
      ]
    }
  ]
}
