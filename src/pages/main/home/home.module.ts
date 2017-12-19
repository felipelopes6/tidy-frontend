import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})

export class HomeModule { }