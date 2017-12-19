import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';
import { ModalEditCustomerPage } from './modal.edit.customer';

@NgModule({
  declarations: [
    ModalEditCustomerPage
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    ModalEditCustomerPage
  ],
  exports: [
    ModalEditCustomerPage
  ]
})

export class ModalEditCustomerModule { }