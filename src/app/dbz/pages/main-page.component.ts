import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.services';


@Component({
    selector: 'app-dbz-main-page',
    //dirección de donde se encuentra el html
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    //Inyectar dbz service para poder acceder a la data y habilitar funciones
    constructor( public dbzService:DbzService){
        
    }
}