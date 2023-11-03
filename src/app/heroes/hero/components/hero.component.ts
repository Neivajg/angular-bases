import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string='Iroman';
public age:number=45
public botonVisible=true

 //Los get =Se ve como una propiedad pero realmente es un método
get capitalizedName():string{
  return this.name.toUpperCase()
}
//métpdos
getHeroDescription():string{
  return `${this.name} - ${this.age}`
}

changeHero():void{
this.name='Neiva';
}

changeAge():void{
this.age=26;
}
Reset():void{
  this.name='Iroman';
  this.age=45;
  //
  document.querySelector('h1')!.innerHTML= '<h1>fffff</h1>';
}
}
