import { Directive, Input, ElementRef, HostListener } from '@angular/core'; 
import { Message } from '../models/Message';
// ElementRef = élement sur lequel on a posé la directive
// Hostlistener = gestionnaire des évènements, est un décorateur

@Directive({
  selector: '[appTest]'
})
export class TestDirective { // pour éviter de répéter le type, on va créer une interface (pour le polymorphisme également). Créaction dans models/messages
  @Input() message : Message;

  constructor(private elem : ElementRef) { // private elem est l'équivalent de this.elem
//Angular lit les paramètres et sait ce dont on a besoin. Il va instancier directement nos paramètres. Nous n'avons pas besoin de les déclarer. Le elementRef représente notre div qui contient notre directive.
    this.changeStyles();
  }
  @HostListener('mouseover') onmouseover(){ // prend l'évènement (créé par nous ou non) du mouseOver
    this.message.texte = 'Hellooooo';
    this.elem.nativeElement.style.border = '1px solid #17a2b8';
  }

  @HostListener('mouseleave') onmouseleave(){ // prend l'évènement (créé par nous ou non) du mouseLeave
    this.elem.nativeElement.style.border = 'none';
  }

  changeStyles(){
    const card = this.elem.nativeElement
    card.style.backgroundColor = '#F5F5F5';
    card.style.padding = '1em';
    card.style.marginTop = '1em';
    card.style.borderRadius = '5px';
  }
}
