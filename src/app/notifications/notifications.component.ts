import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { MessagingService } from '../services/messaging.service';
import { getMessaging, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(
    private afMessaging: AngularFireMessaging,
    private messages: MessagingService
  ){}

  
  refreshNotifications(){
    console.log(this.afMessaging.messages);
  }

  ngOnInit() {
    
  }

}
