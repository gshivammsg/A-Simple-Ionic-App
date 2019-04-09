import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertController} from "@ionic/angular";

import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(private alertCtrl: AlertController, private fire: AngularFireAuth) {
    }

    ngOnInit() {
    }

    async showAlert(message: string) {
        const alert = await this.alertCtrl.create({
            header: '',
            subHeader: '',
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }

    registerUser(form: NgForm) {
        console.log(form);

        this.fire.auth.createUserWithEmailAndPassword(form.value.email, form.value.pswd)
            .then(data => {
                console.log(data);
                this.showAlert('You have been Registered successfully');
                form.onReset();
            })
            .catch(error => {
                console.log(error);
                this.showAlert(error.message);
                form.onReset();
            });

    }

    signInGoogle() {
        this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
            value => {console.log(value);
                this.showAlert('You have been Registered successfully');
            },
            (error) => {
                this.showAlert(error.message);
            }
            );
    }

    signInFacebook() {
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(
                value => {
                    console.log(value);
                    this.showAlert('You have been Registered successfully');
                },
                (error)=> {
                    this.showAlert(error.message);
                }
            );
    }
}
