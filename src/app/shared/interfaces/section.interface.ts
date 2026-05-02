import {SectionTypeEnum} from "../enums/section-type.enum";
import {GalleryLayoutEnum} from "../enums/gallery-layout.enum";

export interface ImageSection {
  type: SectionTypeEnum.Image;
  title?: string;
  description?: string;
  image: string;
}

export interface GallerySection {
  type: SectionTypeEnum.Gallery;
  images: string[];
  layout?: {
    columns?: number;
    gap?: number;
  };
}

export interface SplitSection {
  type: SectionTypeEnum.Split;
  image: string;
  title: string;
  description?: string;

  layout?: {
    imageWidthMax: 70;
    direction: "image-right";
  }
}

export interface TextSection {
  type: SectionTypeEnum.Text;
  text: string;
}
