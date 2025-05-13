import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path : "home",
    canActivate: [authGuard],
    loadComponent: () => 
      import('./dashboard/home/home.component').then((m) => m.HomeComponent),
    children : [
      {
        path : "users",
        loadComponent: () => 
          import('./users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: "documents",
        loadComponent : () => 
          import('./documents/documents.component').then((m) => m.DocumentsComponent),
        children : [
          {
            path : 'addDocument',
            loadComponent : () => 
              import('./documents/add-document/add-document.component').then((m) => m.AddDocumentComponent)
          }
        ]
      },
      {
        path: "ingestionlogs",
        loadComponent : () => 
          import('./ingestion/ingestion.component').then((m) => m.IngestionComponent)
      }
    ]
  }
  
];
