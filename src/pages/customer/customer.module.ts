import { NgModule } from '@angular/core';
import { CustomerDetailsModule } from './details/customer.details.module';
import { ModalEditCustomerModule } from './edit/modal.edit.customer.module';
import { ModalCreateCustomerModule } from './create/modal.create.customer.module';

@NgModule({
  imports: [
    CustomerDetailsModule,
    ModalEditCustomerModule,
    ModalCreateCustomerModule
  ]
})

export class CustomerModule { }