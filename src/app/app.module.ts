import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BluetoothPage } from './../pages/bluetooth/bluetooth';

@NgModule({
  declarations: [
    MyApp,
    BluetoothPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BluetoothPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothPage,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
