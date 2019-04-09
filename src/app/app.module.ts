import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from '@angular/fire';

import {AngularFireAuthModule} from "@angular/fire/auth";
const  firebaseAuth = {
  apiKey: "AIzaSyBfy-j_RM-5TKPBCO9USG6jKqYH8GYGVeQ",
  authDomain: "ionic-app-8ff60.firebaseapp.com",
  databaseURL: "https://ionic-app-8ff60.firebaseio.com",
  projectId: "ionic-app-8ff60",
  storageBucket: "ionic-app-8ff60.appspot.com",
  messagingSenderId: "392212461578"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
