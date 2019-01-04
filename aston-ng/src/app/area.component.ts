import {Component,Input, Output,EventEmitter} from '@angular/core'; // Input pour lui donner une valeur variable en entrée
//Output est
//EventEmitter va nous permettre de créer notre evènement, avec une cible
@Component({
      selector : 'app-area',
      templateUrl:'./area.component.html',
      styleUrls :['./area.component.css']
     
})

export class AreaComponent{
      texte= '';
      @Input('size') tailleMax =140;// On a ouvert une porte d'entrée sur notre composant.(une sorte de setter)
      //Le size est un alias qui sera appelé dans notre app.component
      @Input() nomButton='Partager';
      @Output ('onMessage') texteEvent : EventEmitter<string> = new EventEmitter<string>();
      //les <> nous permettent de typer ce que l'on attend.

      isValidMaxLength() :boolean{
            return this.texte.length >= this.tailleMax;
      }
      send() : void{
           this.texteEvent.emit(this.texte); // Méthode emit pour émettre l'évènement
           this.texte='';
      }
}
