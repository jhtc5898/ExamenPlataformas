import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listapoesias',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./shared/pages/listar/listar.module').then( m => m.ListarPageModule)
  }
  ,
  {
    path: 'listapoesias',
    loadChildren: () => import('./shared/pages/listapoesias/listapoesias.module').then( m => m.ListapoesiasPageModule)
  }
  ,
  {
    path: 'listapoesias/:id',
    loadChildren: () => import('./shared/pages/listapoesias/listapoesias.module').then( m => m.ListapoesiasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./shared/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'crearpoesia',
    loadChildren: () => import('./shared/pages/crearpoesia/crearpoesia.module').then( m => m.CrearpoesiaPageModule)
  },
  {
    path: 'comentar',
    loadChildren: () => import('./shared/pages/comentar/comentar.module').then( m => m.ComentarPageModule)
  }
  ,
  {
    path: 'comentar/:id',
    loadChildren: () => import('./shared/pages/comentar/comentar.module').then( m => m.ComentarPageModule)
  },
  {
    path: 'listacomentarios',
    loadChildren: () => import('./shared/pages/listacomentarios/listacomentarios.module').then( m => m.ListacomentariosPageModule)
  }
  ,
  {
    path: 'listacomentarios/:id',
    loadChildren: () => import('./shared/pages/listacomentarios/listacomentarios.module').then( m => m.ListacomentariosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
