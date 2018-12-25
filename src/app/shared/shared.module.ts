import { DatePipe } from './pipes/date.pipe';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
      DatePipe
    ],
    exports: [
        DatePipe
    ]
  })
  export class SharedModule { }
