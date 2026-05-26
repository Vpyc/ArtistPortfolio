import * as devPages from './dev/pages';
import * as devShared from './dev/shared';

import * as demoPages from './demo/pages';
import * as demoShared from './demo/shared';

import {environment} from "../../environments/environment";

const devContent = {
  pages: devPages.PAGE_MAPPING,
  aboutPage: devPages.ABOUT_PAGE,
  shared: devShared
};

const demoContent = {
  pages: demoPages.PAGE_MAPPING,
  aboutPage: demoPages.ABOUT_PAGE,
  shared: demoShared
};

export const CONTENT =
  environment.mode === 'demo'
    ? demoContent
    : devContent;
