import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [ // Para usarlos dentro de este modulo
    CounterComponent
  ],
  exports:[ // Para usarlos fuera de este modulo
    CounterComponent
  ]
})
export class CounterModule {}
