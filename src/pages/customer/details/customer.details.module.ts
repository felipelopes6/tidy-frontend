import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';
import { CustomerDetailsPage } from './customer.details';

@NgModule({
  declarations: [
    CustomerDetailsPage
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    CustomerDetailsPage
  ],
  exports: [
    CustomerDetailsPage
  ]
})

export class CustomerDetailsModule { }