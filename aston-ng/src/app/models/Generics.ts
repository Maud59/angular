// On attend un argument, mais avec n'importe quel type. Notre retour de valeur est un any également
function doSomething(arg:any):any{
      return "L'argument a comme valeur : "+ arg;
}

//On va créer un généric qui va nous permettre d'appeler notre fonction, mais de lui donner le type de l'argument lors de l'appel de notre fonction et non lors de notre déclaration.

function doTest<T>(arg:T): string{
      return "L'argument a comme valeur : "+ arg;
}

//Les <T> représentent le typage qu'on l'aura mais qu'on ne connait pas encore. Le premier <T> permet de dire que notre fonction est de type généric et notre T représente le typage de notre argument. 

interface Message{
      id : Number;
      texte : string;
      date : Date;
}

class Http {
      valeur : any;
      get<T>(url:string):T{
            return this.valeur;
      }
}
const http= new Http();
http.valeur={
      id : 5454,
      texte : 'hello',
      date : new Date()
}
const data = http.get<Message>('http://api.google.com')

alert(data.texte)