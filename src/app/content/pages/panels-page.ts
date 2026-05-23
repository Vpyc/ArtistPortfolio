import {Page} from "../../shared/interfaces/page.interface";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {MEDIA} from "../media/media.registry";

export const PANELS_PAGE: Page = {
  hero: {
    title: 'Абстрактное панно',
    backgroundImage: MEDIA.panels.main
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
