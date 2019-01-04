import { Component } from '@angular/core';
import { AssertNotNull } from '@angular/compiler';
import { Message } from './models/Message';
import { TestZoo } from './models/Animal'; //importation auto si construtor
import { TestPoubelle } from './models/Poubelle';


@Component({
  selector: 'app-root', // selecteur
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // styles css appliqués
})
export class AppComponent { // L'export permettra l'import sur un autre fichier
  messages: Message[] = [] /*{ 
    id: Number,// on déclare notre objet
    texte: string,// avec une propriété en string
    date: Date // Et aura une date de type date
  }[] = [];*/    // Les crochets permettent de définir le tableau,/!\ =[] pour éviter un undefined
  compteur=0;
  add(texte) { // objet qui récupère le texte pour le mettre dans un tableau avec une date 
    //alert(texte);
    this.messages.push({ // permet de mettre le texte dans le tab
      id : Date.now(),
      texte: texte,
      date: new Date()
    })
    this.compteur+=1;
  }
  delete(i) {
    this.messages.splice(i,1);
  }

  deleteAll(){
    this.messages=[];
  }
  /*couleur(){

  }*/

  constructor(){
     //new TestZoo();
     new TestPoubelle();
  }
}
