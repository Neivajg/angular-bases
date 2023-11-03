import { HeroComponent } from './../hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Para crear un modulo necesitamos el decorador @NgModule, hay que declarar dicho modulo
 y además exportarlo para que se pueda tener acceso fuera de ese scott.
La carpeta de este modulo sería: -Hero 
                                    -Components contiene:(css,html,spect y ts ) y la carpeta hero:
                                        hero tiene el hero.module.ts para toda la creación del modulo*/

/* Estos modulos necesitan importar :   , ya que utilizan ngIf y ngFOr*/ 
@NgModule({   
     declarations:[
        HeroComponent,
    ],exports:[
        HeroComponent,
    ],imports:[
        CommonModule
    ]
})
export class HeroModule{

}