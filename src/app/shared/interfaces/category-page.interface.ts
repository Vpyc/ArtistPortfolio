import {HeroSection} from "./hero-section.interface";
import {Project} from "./project.interface";

export interface CategoryPage {
  hero: HeroSection;
  projects: Project[];
}
