import {SectionTypeEnum} from "../enums/section-type.enum";
import {GalleryLayoutEnum} from "../enums/gallery-layout.enum";
import {TimelineItem} from "./timeline-items.interface";

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
    imageWidthMax?: number;
    direction?: string;
    splitLine?: boolean;
  }
}

export interface TextSection {
  type: SectionTypeEnum.Text;
  text: string;
}

export interface TimelineSection {
  type: SectionTypeEnum.Timeline;
  items: TimelineItem[];
}
