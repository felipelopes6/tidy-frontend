import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { CustomerProvider } from '../../../providers/customer/customer';

@Component({
  selector: 'page-modal-create-customer',
  templateUrl: 'modal.create.customer.html'
})

export class ModalCreateCustomerPage {
  formData = {};

  constructor(
    public navCtrl: NavController,
    public viewCtrl : ViewController,
    public customerProvider: CustomerProvider,
    public alertCtrl: AlertController) { }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  public createCustomer() {
    this.customerProvider.createCustomer(this.formData)
      .then((response) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Customer created!',
          buttons: ['Confirm']
        });

        alert.present();
        this.formData = {};
        this.viewCtrl.dismiss(response);
      })
      .catch((err) => {
        let alertError = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Something is wrong!',
          buttons: ['Confirm']
        });

        alertError.present();        
      })
  }
}
