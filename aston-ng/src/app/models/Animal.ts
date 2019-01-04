export abstract class Animal { // Notre class est abstraite pour pouvoir y attribuer des éléments divers faisant partie des animaux
      age : 0;
      name= '';
      constructor (name:string){
            this.name = name;
      }
      abstract deplacement(); // La fonction est abstraite, elle peut être utilisée pour toutes les classes d'animaux créés
}
export class Lion extends Animal{
      deplacement(){ 
            return 'Je me déplace comme un lion : ' + this.name;
      }
}

export class Chien extends Animal {
      deplacement(){
            return 'Je me déplace comme un chien : ' + this.name;
      }
}

class Zoo{
      animaux : Animal[]= []; // Notre zoo est composé d'un tableau d'animaux abstraits

      addAnimal(a : Animal){ // Nous pouvons ajouter un animal à notre tableau d'animaux, à partir de l'élément a
            this.animaux.push(a);
            return this;
      }

      animation(){
            console.log('Animation du zoo');
            for (let a of this.animaux){   
                  console.log(a.deplacement());
            }
      }
}

export class TestZoo{
      constructor(){
            let parc = new Zoo();
            parc.addAnimal (new Lion ('Simba')).addAnimal(new Chien ('Médor'));

            parc.animation();

      }
}
