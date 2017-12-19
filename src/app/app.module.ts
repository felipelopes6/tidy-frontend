import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CustomerProvider } from '../providers/customer/customer';

import { MainModule } from '../pages/main/main.module';
import { CustomerModule } from '../pages/customer/customer.module';


@NgModule({
  declarations: [
    MyApp    
  ],
  imports: [
    BrowserModule,
    MainModule,
    CustomerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerProvider
  ]
})
export class AppModule {}
