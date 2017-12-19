import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';
import { ModalCreateCustomerPage } from './modal.create.customer';

@NgModule({
  declarations: [
    ModalCreateCustomerPage
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    ModalCreateCustomerPage
  ],
  exports: [
    ModalCreateCustomerPage
  ]
})

export class ModalCreateCustomerModule { }