import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 public heroNames:string[]=['Spiderman', 'Iroman', 'Hulk', 'She hulk', 'Thor'];
 public heroesBorrados?:string

 borrarUltHeroe():void{
  this.heroesBorrados=this.heroNames.pop()
 }
}
