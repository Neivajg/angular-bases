import { Component, EventEmitter, Output} from '@angular/core';

import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'dbz-charset-form',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
      // EventEmitter<Character> : es un genérico
      @Output()
      public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  

  public character:Character={
    name:'',
    power:0
  };

  emitCharcater():void{
    // console.log(this.character)
    //si no me llega nombre desde el formulario se devuelve , no se guarda
     if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character)
    // Darle un valor para que se limpie cuando agregemos los personajes
    this.character.name ='';
    this.character.power=0
  }
}
