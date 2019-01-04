import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  messages: Message[] = [];// A chaque fois qu'on recoit un message d'une alerte fonction (récupérée par le service); elle sera stockée dans le tableau messages qui possède des types Message

  constructor(private alertmsg: AlertService) { }

  ngOnInit() {
    this.alertmsg.message.subscribe(
      message => {
        this.messages = [message, ...this.messages];
      }
    )
  }
  onClose(index) {// supression du message en question
    this.messages.splice(index,1)
  }
}
