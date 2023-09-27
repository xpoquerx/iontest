import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./page/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./page/policies/policies.module').then(m => m.PoliciesPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./page/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'author',
    loadChildren: () => import('./page/author/author.module').then(m => m.AuthorPageModule)
  },

  // A rota curinga deve ser sempre a última rota.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
