import {SectionTypeEnum} from "../enums/section-type.enum";
import {Page} from "../interfaces/page.interface";

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
            image: 'assets/main.jpg',
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
                image: 'assets/paint.png'
              },
              {
                date: new Date(2025, 0, 1),
                title: 'Победа пожалуйста 2',
                description: 'Возможная победа побед в победе 2',
                image: 'assets/interier.png'
              },
            ]
          },
        ]
      }
    ]
  }
;
