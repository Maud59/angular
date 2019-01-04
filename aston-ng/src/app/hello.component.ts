// importation de notre component
import {Component} from '@angular/core';

@Component({
      // Selecteur qui sera appelé dans note html
      selector : 'app-hello',//''.app-hello' pour class //'[app-hello]' pour attribut,//'app-hello' pour selecteur, 
      //template : `<h2> Hello {{name}} </h2>`, // Le template peut passer par une url
      templateUrl:'./hello.component.html',
      styleUrls :['./hello.component.css'] // Sous forme de tableau quand plusieurs url
      /*[`
      h2{
            color : purple;
      }`]*/
})
export class HelloComponent{
    message = '';
    title = 'Aston application';
 //data = {name: 'Aston', ville : 'Lille'}; // doit renvoyer une string pour être interprété
  dataTest = ['a','b','c'];
  name = '';
  color='';

  changeColor(): string {// fonction return string
    switch(this.message){
      case 'bonjour':
        return 'royalblue';
      case 'hello':
        return 'pink';
      default :
      return 'purple';
      //retourne un type
    }
  }

  colorInput(){
    return this.colorInput;
  }
  //addAnimal(animal:Animal){ La fonction pour ajouter un animal, attend un objet du type Animal }
  //assertion (cast, conversion du type entre <>)
  changeName(event:Event):void{
    //console.log(event.target.value); équivalent en dessous mais avec un typage
    const inputElem = <HTMLInputElement>event.target; // on peut utiliser désormais toutes les propriétés de notre input
    console.log(inputElem.value);
    (this.name)=inputElem.value;
    
  }

  clickMe(event):void{
    console.log(event);
    event.target.style.color='orangered';
}
/* notre composant va se déclarer dans notre fichier app.module*/
}