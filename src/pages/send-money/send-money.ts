import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {moneyServices} from '../send-money/send-money.service';

/**
 * Generated class for the SendMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-send-money',
  templateUrl: 'send-money.html',
  providers: [moneyServices],
})
export class SendMoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,moneyService :moneyServices) {
  }






  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMoneyPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Envoi',
      subTitle: 'done',
      buttons: ['ok']
    });
    alert.present();
  }
  
}