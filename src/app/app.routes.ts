// src/app/app.routes.ts
import { Routes } from '@angular/router';
// import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// 🔐 Redirection logic
// const redirectUnauthorized = () => redirectUnauthorizedTo(['signin']);
// const redirectLoggedIn = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  // 🌐 Root redirect
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  // 🏠 Home (Protected)
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // canActivate: [canActivate(redirectUnauthorized)]
  },

  // 🎮 Games (Protected)
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
    // canActivate: [canActivate(redirectUnauthorized)]
  },

  // 🏆 Tournaments (Protected)
  {
    path: 'tournaments',
    loadChildren: () =>
      import('./tournaments/tournaments.module').then(
        (m) => m.TournamentsModule
      ),
    // canActivate: [canActivate(redirectUnauthorized)]
  },

  // 🔑 Auth Routes (Public)
  // {
  //   path: 'signin',
  //   loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
  //   // canActivate: [canActivate(redirectLoggedIn)]
  // },
  // {
  //   path: 'signup',
  //   loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
  //   // canActivate: [canActivate(redirectLoggedIn)]
  // },

  // 🚧 Not Found (Catch-all)
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
