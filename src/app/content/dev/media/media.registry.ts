import {getMediaUrl} from "../../../shared/utils/media.utils";

export const MEDIA = {

  hero: {
    main: getMediaUrl('main.jpg'),
  },

  paintings: {
    main: getMediaUrl('paint.png'),
    livePaint: getMediaUrl('live-paint.png')
  },

  panels: {
    main: getMediaUrl('panno.png')
  },

  interiorPainting: {
    hero: getMediaUrl('interier.png'),
    gallery1: getMediaUrl('interier.png'),
  },

  about: {
    portrait: getMediaUrl('about.jpg'),
  },

};
