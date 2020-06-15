import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('../pages/holamundo/holamundo.module').then(m => m.HolamundoPageModule)
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
