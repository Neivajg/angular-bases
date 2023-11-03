import { ListComponent } from './heroes/list/components/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
import { CounterModule } from './counter/componets/counter/couter.module';
import { HeroModule } from './heroes/hero/components/hero/hero.module';
import { ListModule } from './heroes/list/components/moduleList/list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //Modulos Creados
     CounterModule,
     HeroModule,
     ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
