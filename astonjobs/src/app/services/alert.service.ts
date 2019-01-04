import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Message } from '../models/message';


@Injectable({// injecter un service dans un autre service
      providedIn: 'root'
    })

    export class AlertService {
          message : Subject<Message>= new Subject<Message>();

      constructor(private http: HttpClient) {
       }

       add(msg: string, type: string){
             this.message.next({ // Le next permet de dire à notre élément qu'il va prendre en compte le prochain texte qu'on lui soumettra
                   type: type,
                   text :msg
             });
       }
       reset(){
             this.message.next(); // Le fait de mettre un next(vide) permet de vider notre liste de message quand on appellera la fonction reset
       }
    
}