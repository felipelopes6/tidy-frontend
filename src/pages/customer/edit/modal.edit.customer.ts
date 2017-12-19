import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CustomerProvider } from '../../../providers/customer/customer';

@Component({
  selector: 'page-modal-edit-customer',
  templateUrl: 'modal.edit.customer.html'
})

export class ModalEditCustomerPage {  
  formData = {};
  customerDataModalEdit;

  constructor(
    public navCtrl: NavController,
    public viewCtrl : ViewController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private customerProvider: CustomerProvider) {      
      this.customerDataModalEdit = this.navParams.data.customerDetail;
      this.formData = this.customerDataModalEdit;
    }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  public editCustomer() {
    this.customerProvider.editCustomer(this.formData, this.customerDataModalEdit.id)
      .subscribe((res) => {
        if (res) {
          let editAlert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Customer edited!',
            buttons: ['Confirm']
          });

          editAlert.present();
          this.viewCtrl.dismiss(this.formData);          
        }
      }, (err) => {
        let editAlertError = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Something is wrong!',
          buttons: ['Confirm']
        });

        editAlertError.present();
      })
  }
}
