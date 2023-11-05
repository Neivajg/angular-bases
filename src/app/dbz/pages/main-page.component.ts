import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    //dirección de donde se encuentra el html
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    //obtenemos tipo de dato de la interfaz creada para Character
   public characters:Character[]=[
   {
        name:'Krillin',
        power:1000
    },
    {
        name:'Goku',
        power:9500
    },
    {
        name:'Vegeta',
        power:7500
        }
   ];

   onNewCharacter(character:Character):void{
    //Push par añadir al final de array o unshift para agregar al inicio.
    //Por ahora no se registra ya q no tenemos backend.
        this.characters.push(character);
         console.log('MainPage')
         console.log(character)
   }
}