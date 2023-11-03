import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports:[
        //Necesario por el uso de ngIf,ngFor..
        CommonModule
    ]


})
export class ListModule { }
