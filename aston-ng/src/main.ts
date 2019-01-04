//environnement pour la prod
import { enableProdMode } from '@angular/core';

//pour les applications sur navigateur (ici, pour le web)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Rajouter les modules
import { AppModule } from './app/app.module';

//change l'environnement pour une prod ou non 
import { environment } from './environments/environment';

//pour un environnement de prod
if (environment.production) {
  enableProdMode();
}

//charge le module par défaut
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /* il est possible d'importer plusieurs imports en même temps dans une même fichier
  Attention à bien utiliser notre importation*/