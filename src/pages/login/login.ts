import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TransfertListPage } from '../transfert-list/transfert-list';
import {MapPage} from '../map/map';
import { MessagePage } from '../message/message';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users:any;
  private username: string;
  private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.users = [
      {
        username : "mima",
        pass : "mima"
      },
      {
        username : "client",
        pass : "pass"
      }
    ]
  }

  login() {
  
    this.users.forEach(element => {
      if(element.username == this.username && element.pass == this.password) 
      this.navCtrl.setRoot(TransfertListPage);
    else {
      this.presentAlert()
    }

    });
   
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'email ou mots de passe incorrect !!!',
      buttons: ['ok']
    });
    alert.present();
  }

  

  map() {
    this.navCtrl.push(MapPage);
  }

  contact(){
    this.navCtrl.push(MessagePage);
  }


}
