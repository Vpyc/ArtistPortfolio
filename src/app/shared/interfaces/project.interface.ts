import {Section} from "../models/sections.type";

export interface Project {
  slug: string;
  title: string;
  sections: Section[];
}
