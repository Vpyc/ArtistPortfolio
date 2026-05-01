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
  layout: GalleryLayoutEnum;
  images: string[];
}

export interface TextSection {
  type: SectionTypeEnum.Text;
  text: string;
}
