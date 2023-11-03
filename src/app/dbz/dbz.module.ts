import { dbzComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

//importar el componente dbzComponent aquí y exportarlo para poder tener el modulo en app.module.ts

@NgModule({
  declarations: [
    dbzComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    dbzComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
