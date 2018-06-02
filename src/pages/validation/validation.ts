import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {valideServices} from '../validation/validationService';

/**
 * Generated class for the ValidationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
  providers: [valideServices],
})
export class ValidationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,valideService :valideServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationPage');
  }

}
