import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/auth";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
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

    onLogin(form: NgForm) {
        this.afAuth.auth.signInWithEmailAndPassword(form.value.uname, form.value.pswd).then(
            value => {
                console.log(value);
                this.showAlert('You have been Logged in SuccessFully');
                form.onReset();
            },
            (error) => {
                this.showAlert(error.message);
                form.onReset();
            }

    )
    }
}
