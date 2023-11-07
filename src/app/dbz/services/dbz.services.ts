import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid' 
// v4 ass uuid:asignamos ese valor a la función v4()
console.log(uuid)

//Decorador que le dice a angular que lo tarte como un servicio.
@Injectable({providedIn: 'root'})
//Añadir la data
export class DbzService {

        //obtenemos tipo de dato de la interfaz creada para Character
   public characters:Character[]=[
    {
         id:uuid(),
         name:'Krillin',
         power:1000
     },
     {
         id:uuid(),
         name:'Goku',
         power:9500
     },
     {
         id:uuid(),
         name:'Vegeta',
         power:7500
         }
    ];
 
   addCharacter(character:Character):void{
        //const para añadir nuevos personajes con id
            // const newCharacter:Character ={
            //     id:uuid(),
            //     name:character.name,
            //     power:character.power
            // }

            //Hacerlo con el operador spread (...charcater) para q tome todas las propieades
            // y las añada en este nuevo obj qu estamos creando y en el caso q charcater tuviera mas propiedades propiedades no habría q modificar nada.

        const newCharacter:Character ={id:uuid(), ...character}

     //Push par añadir al final de array o unshift para agregar al inicio.
     //Por ahora no se registra ya q no tenemos backend.
         this.characters.push(newCharacter);
        //   console.log('MainPage')
        //   console.log(character)
    }
 
    // onDeleteCharacter(index:number){
    //  //Metodo splice para eliminar mediante (index,1) el 1 hace que solo se borre un elemento 
    //  this.characters.splice(index,1);
    // }

    deleteCharacterById(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
    }

    constructor() { }
    
}