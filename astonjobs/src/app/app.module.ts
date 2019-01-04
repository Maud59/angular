import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // /!\ reactiveModule
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule} from '@angular/material';

  //Nos composants
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AddComponent } from './jobs/add/add.component';
import { ListComponent } from './jobs/list/list.component';
import { DetailsComponent } from './jobs/details/details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert/alert.component';

//Créer nos routes, /!\ Attention à l'ordre des routes. Les id en dernier de manière générale. (/!\ à la syntaxe)
const routes: Route[]= [
  {path : '', component : HomeComponent },
  {path : 'jobs', component : ListComponent },
  {path : 'jobs/add', component : AddComponent },
  {path : 'jobs/:id', component : DetailsComponent }
];
// donner les informations aux routeurs pour que cela fonctionne. 
// Le routeur va permettre en donnant le lien /add d'afficher notre composant sans changer le contenu autre de notre page. La page n'est pas rafraichie, c'est un chargement dynamique

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AddComponent,
    ListComponent,
    DetailsComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule, // Module de formulaire
    ReactiveFormsModule,
    MatSelectModule, // Module de formulaire select
    MatDatepickerModule, // Module de date
    MatNativeDateModule,// A ajouter pour la date 
    RouterModule.forRoot(routes),// le forChild permet d'avoir des chemins avec des enfants - système hiérarchique
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
