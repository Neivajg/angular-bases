import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
 public title:string = 'Mi primera APp';
 public counter:number=10;

 incrementar(value:number):void{
  this.counter+= value
 }
//  decremento(){
//   this.counter--
//  }
reset():void{
this.counter =10
}
}
