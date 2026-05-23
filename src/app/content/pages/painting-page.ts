import {Page} from "../../shared/interfaces/page.interface";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {MEDIA} from "../media/media.registry";

export const PAINTING_PAGE: Page = {
  hero: {
    title: 'Живопись',
    backgroundImage: MEDIA.paintings.livePaint
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
