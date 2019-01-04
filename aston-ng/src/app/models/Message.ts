export interface Message{
      // l'interface est un type (même principe qu'une classe, qui est reconnu dans le programme). Elle est composée de méthodes abstraites. Il n'est pas commun d'y mettre des propriétés, mais ts le permet. Elle sera importée dans notre directive pour pouvoir l'utiliser
      id : Number,
      texte : string,
      date : Date,
}