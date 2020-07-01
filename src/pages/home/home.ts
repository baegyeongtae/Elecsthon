import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { BluetoothPage } from '../bluetooth/bluetooth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }
  pushBluetoothPage(){
      this.navCtrl.push(BluetoothPage);
  }
}
