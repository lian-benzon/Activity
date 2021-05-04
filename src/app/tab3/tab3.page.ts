import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName="";
  contNumber="";
  contacts: any = [];
  constructor(public alertCtrl: AlertController)  {}

  saveC() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();
  }
  clearField() {
    this.contName = "";
    this.contNumber = "";
  }
  
  async delete(cont) {
    const confirm = await this.alertCtrl.create({
      header: ' Please Confirm!',
      message: 'Do you want to delete this contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'OK',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index,1);
              console.log('Contact Deleted');
            }
        }
        }
      ]
    } );

    await confirm.present();
  }

}
