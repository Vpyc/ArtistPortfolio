import * as demoPages from './demo/pages';
import * as demoShared from './demo/shared';

import {environment} from "../../environments/environment";


const demoContent = {
  pages: demoPages.PAGE_MAPPING,
  aboutPage: demoPages.ABOUT_PAGE,
  shared: demoShared
};

export const CONTENT =
  environment.mode === 'demo'
    ? demoContent
    : '';
