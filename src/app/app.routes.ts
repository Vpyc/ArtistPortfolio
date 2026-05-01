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
    path: '**',
    redirectTo: '',
  },
];
