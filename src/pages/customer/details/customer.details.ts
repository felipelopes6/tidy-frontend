import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CustomerProvider } from '../../../providers/customer/customer';
import { HomePage } from '../../main/home/home';
import { ModalEditCustomerPage } from '../edit/modal.edit.customer';

@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer.details.html'
})

export class CustomerDetailsPage {
  customerDetail: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerProvider: CustomerProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {       
      this.customerDetail = this.navParams.data.customer_data;
    }

  public editCustomer(customerID) {
    let modalEditCustomer = this.modalCtrl.create(ModalEditCustomerPage, { customerDetail: this.customerDetail })
    modalEditCustomer.present();    
  }

  public deleteCustomer(customerID) {
    let confirm = this.alertCtrl.create({
      title: 'Alert',
      message: 'Are you sure to delete the customer?',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Confirm',
          handler: () => {
            let loaderDelete = this.loadingCtrl.create();
            loaderDelete.present();
            
            this.customerProvider.deleteCustomer(customerID)
              .subscribe((res) => {
                loaderDelete.dismiss();
                this.navCtrl.push(HomePage);
              }, (err) => {
                console.log('err', err)
              })
          }
        }
      ]
    });
    confirm.present();    
  }

}
