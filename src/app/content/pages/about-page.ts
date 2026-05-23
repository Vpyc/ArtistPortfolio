import {Page} from "../../shared/interfaces/page.interface";
import {SectionTypeEnum} from "../../shared/enums/section-type.enum";
import {MEDIA} from "../media/media.registry";

export const ABOUT_PAGE: Page = {
    groups: [
      {
        textColor: '--primary',
        sections: [
          {
            type: SectionTypeEnum.Text,
            text: 'Обо мне',
          },
          {
            type: SectionTypeEnum.Split,
            image: MEDIA.about.portrait,
            title: 'Терещенко Юлия Юрьевна',
            description: 'Победа наконец то может быть пожалуйста????',
          },
        ]
      },
      {
        textColor: '--foreground',
        sections: [
          {
            type: SectionTypeEnum.Timeline,
            title: 'Достижения',
            items: [
              {
                date: new Date(2025, 0, 1),
                title: 'Победа пожалуйста',
                description: 'Возможная победа побед в победе',
                image: MEDIA.paintings.main,
              },
              {
                date: new Date(2025, 0, 1),
                title: 'Победа пожалуйста 2',
                description: 'Возможная победа побед в победе 2',
                image: MEDIA.interiorPainting.gallery1,
              },
            ]
          },
        ]
      }
    ]
  }
;
