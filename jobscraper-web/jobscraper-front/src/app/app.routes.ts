import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: '/not-found'}
];
