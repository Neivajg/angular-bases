import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.services';


@Component({
    selector: 'app-dbz-main-page',
    //dirección de donde se encuentra el html
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    //Inyectar dbz service para poder acceder a la data y habilitar funciones
    constructor( private dbzService:DbzService){    }
    //Al poner un servicio privado hay q extraer esos datos de la bbdd 
    get characters():Character[]{
        //[...this.dbzService.characters] sintaxis extendida/spread syntax
        return [...this.dbzService.characters]
    }

    onDeleteCharacter( id:string):void{
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character:Character):void{
        this.dbzService.addCharacter(character)
    }
}