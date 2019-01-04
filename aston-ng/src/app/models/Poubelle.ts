import { flatten } from '@angular/core/src/render3/util';
import { CssSelector } from '@angular/compiler';

// Création d'une interface qui permet de rassembler des éléments qui ont le même comportement, mais pas d'attributs communs 
// Le nom finit par handler, et l'interface est toujours public
// composer d'une fonction qui représente le comportement
export interface DeleteHandler{
      delete();
}

export class File implements DeleteHandler { // l'implement permet de confirmer l'appartenance à l'interface, la focntion delet() est donc obligatoire à l'intérieur de notre class. Elle peut être vide mais doit être présente.
      delete(){
            return 'suppression du fichier';
      }
}
export class Database implements DeleteHandler{
      delete(){
            return 'Supression de la database';
      }
}

export class Folder implements DeleteHandler{ // Le dossier reprend la fonction delete() tout en supprimant tous ses éléments contenus à l'intérieur (par exemple avec le tableau files comportant les différents fichiers)
      files : File[] = []
      addFile(f:File){
            this.files.push(f);
            return this;
      }
      delete(){
            console.log('Destruction du contenu du répertoire')

            for (let f of this.files){
                  f.delete();
            }
            return 'suppression du répertoire';
      }
}
 // cette classe ne peut être modifié, comment faire en sorte qu'elle soit supprimée sans la modifier ?
export class CloudServer{
      remove(){
            return 'Remove instance of server'
      }
}
// solution avec un adaptateur
export class CloudServerAdapter implements DeleteHandler {
      constructor(private cs : CloudServer){}
      delete(){
            return  this.cs.remove();
      }
}
/*export class CloudDelete extends Cloud implements DeleteHandler{
      delete(){
            return 'suppression données cloud'
      }
}*/
 // La classe Poubelle appelle la fonction destroy qui va supprimer tous les éléments à supprimer (database, files ou folder)
export class Poubelle{
      destroy(dh:DeleteHandler){
            console.log('Destruction en cours ...')
            console.log(dh.delete());
      }
}
 // Appel de la class Test
export class TestPoubelle{
      constructor(){
            let p = new Poubelle();

            let folder = new Folder();
            let cs = new CloudServerAdapter(new CloudServer());

            // On rajoute des fichiers dans notre folder pour tester
            folder.addFile(new File());
            folder.addFile(new File());
            folder.addFile(new File());

            p.destroy(cs);
            p.destroy(new File());
            p.destroy(new Database());
            p.destroy(folder);
      }
}