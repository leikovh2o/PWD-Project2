import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from '@firebase/util';
import { AlertController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase/compat';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messagingService: MessagingService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController){
    
    }

  

  requestPermission(){
    this.messagingService.requestPermission().subscribe(
      async token => {
        const toast = await this.toastCtrl.create({
          message: 'Copy this token:   ' + token,
          duration: 6000
        });
        toast.present();
      },
      async (err) => {
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: err,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  async deleteToken() {
    this.messagingService.deleteToken();
    
    const toast = await this.toastCtrl.create({
      message: 'Token removed',
      duration: 2000
    });
    toast.present();
  };
  

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
