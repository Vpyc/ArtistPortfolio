import {SectionTypeEnum} from "../enums/section-type.enum";
import {Page} from "../interfaces/page.interface";

export const ABOUT_PAGE: Page = {
    groups: [
      {
        sections: [
          {
            type: SectionTypeEnum.Split,
            image: 'assets/interier.png',
            title: 'Аквапарк "Мореон"',
            description: 'Победа наконец то может быть пожалуйста????'
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
      }
    ]
  }
;
