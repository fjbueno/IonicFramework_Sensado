import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'holamundo', pathMatch: 'full' },
  {
    path: 'holamundo',
    loadChildren: () => import('./pages/holamundo/holamundo.module').then( m => m.HolamundoPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'sensores',
    loadChildren: () => import('./sensores/sensores/sensores.module').then( m => m.SensoresPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./sensores/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'acelerometro',
    loadChildren: () => import('./sensores/acelerometro/acelerometro.module').then( m => m.AcelerometroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
