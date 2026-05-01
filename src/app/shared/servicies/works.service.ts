import {computed, Injectable, Signal, signal} from '@angular/core';
import { Work } from '../models/work.type';

@Injectable({ providedIn: 'root' })
export class WorkService {
  private works: Signal<Work[]> = signal([
    {
      id: '1',
      title: 'Бассенджи 1',
      category: 'Роспись интерьера',
      description: 'Победа победа победа победа',
      imageUrl: 'assets/interier.png',
    },
    {
      id: '2',
      title: 'Попугай 1',
      category: 'Интерьерная картина',
      description: 'Победа победа победа победа',
      imageUrl: 'assets/paint.png',
    },
    {
      id: '3',
      title: 'Бассенджи 2',
      category: 'Абстрактное панно',
      description: 'Победа победа победа победа',
      imageUrl: 'assets/panno.png',
    },
    {
      id: '4',
      title: 'Лисичка',
      category: 'Живопись',
      description: 'Победа победа победа победа',
      imageUrl: 'assets/live-paint.png',
    },
    {
      id: '5',
      title: 'Бэкграунд',
      category: 'Главная',
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
