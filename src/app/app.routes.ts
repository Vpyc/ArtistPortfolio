import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./features/contacts/contacts.component').then(m => m.ContactsComponent),
  },

  {
    path: 'portfolio/interior-painting',
    loadComponent: () => import('./features/portfolio/pages/interior-painting/interior-painting.component').then(m => m.InteriorPaintingComponent)
  },
  {
    path: 'portfolio/interior-art',
    loadComponent: () => import('./features/portfolio/pages/interior-art/interior-art.component').then(m => m.InteriorArtComponent)
  },
  {
    path: 'portfolio/painting',
    loadComponent: () => import('./features/portfolio/pages/painting/painting.component').then(m => m.PaintingComponent)
  },
  {
    path: 'portfolio/panels',
    loadComponent: () => import('./features/portfolio/pages/panels/panels.component').then(m => m.PanelsComponent)
  },

  {
    path: '**',
    redirectTo: '',
  },
];
