import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: '/not-found'}
];
