import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Job } from '../models/Job';
import { Observable,Subject } from 'rxjs'; // vient de la bibliothèque rx.js
import { map } from 'rxjs/operators'

const API_BASE_URL="http://localhost:3000/api/jobs";

@Injectable({// injecter un service dans un autre service
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  add(job : Job){
    return this.http.post(API_BASE_URL,job)

  }

  delete(){

  }
  update(){

  }
  find(id:Number){
  }

  all() : Observable<Job[]>{ // observable sera du type job []
    return this.http.get<Job[]>(API_BASE_URL)// récupère le résultat de la BDD, le map permet de mapper les résultats en mode tableau Job
               .pipe(
                      map(res => {return res;}) //  égal à response => response, retourne les données comme demandé
                    );

  }
}
