import {Section} from "../models/sections.type";
import {HeroSection} from "./hero-section.interface";

export interface Project {
  hero: HeroSection;
  sections: Section[];
}
