import { Component } from '@angular/core';


//@Component =Es un decorador que transforma mi clase en un componente.
@Component({
    selector:'app-counter',//Es basicamente como quiero llamar yo a mi componente
     //Es lo que usamos para mostrar en el navegador. Podemos poner  `` para meter más que un h1
    template:`
        <h3>Counter:{{counter}}</h3>
        <button (click)="incrementar(+1)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="incrementar(-1)">-1</button>
     ` 
})
//Tenemos que añadir el componente en app.module.ts para ppoder mostrar nuestros componentes
export class CounterComponent{
    public counter:number=10;
    incrementar(value:number):void{
        this.counter+= value
       }
      reset():void{
      this.counter =10
      }
    constructor(){
        
    }
}
// utilizar snippet de angular : escribir a- y selecionar a-component y te crea todo el componente