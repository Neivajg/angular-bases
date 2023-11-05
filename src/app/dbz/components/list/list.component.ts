import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //DEcorador que trae la info del Padre( Page/Maincomponent.ts)
  @Input()
  public characterList:Character[]=[
    {
      name:'Trunk',
      power:10
    }
  ]

  onDeleteCharacter(index:number):void{
console.log({index})
  }
}
