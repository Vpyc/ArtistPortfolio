import {computed, Injectable, Signal, signal} from '@angular/core';
import {Work} from '../interfaces/work.interface';
import {PortfolioCategorySlugEnum} from "../enums/portfolio-category-slug.enum";

@Injectable({ providedIn: 'root' })
export class WorkService {
  private works: Signal<Work[]> = signal([
    {
      id: '1',
      title: 'Роспись интерьера',
      category: PortfolioCategorySlugEnum.InteriorPainting,
      description: 'Победа победа победа победа',
      imageUrl: 'assets/interier.png',
    },
    {
      id: '2',
      title: 'Интерьерная картина',
      category: PortfolioCategorySlugEnum.InteriorArt,
      description: 'Победа победа победа победа',
      imageUrl: 'assets/paint.png',
    },
    {
      id: '3',
      title: 'Абстрактное панно',
      category: PortfolioCategorySlugEnum.Panels,
      description: 'Победа победа победа победа',
      imageUrl: 'assets/panno.png',
    },
    {
      id: '4',
      title: 'Живопись',
      category: PortfolioCategorySlugEnum.Painting,
      description: 'Победа победа победа победа',
      imageUrl: 'assets/live-paint.png',
    },
    {
      id: '5',
      title: 'Бэкграунд',
      category: PortfolioCategorySlugEnum.InteriorPainting,
      description: 'Победа победа победа победа',
      imageUrl: 'assets/main.jpg',
    }
  ]);

  readonly all = computed(() =>
    this.works().filter(w => w.id !== '5')!
  );

  readonly hero = computed(() =>
    this.works().find(w => w.id === '5')!
  );
}
