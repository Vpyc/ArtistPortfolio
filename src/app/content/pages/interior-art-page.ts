import {Page} from "../../shared/interfaces/page.interface";
import {getMediaUrl} from "../../shared/utils/media.utils";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";

export const INTERIOR_ART_PAGE: Page = {
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
  ]
}
