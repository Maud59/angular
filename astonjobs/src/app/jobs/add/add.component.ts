import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; // La dépendance va être appelée dans le constructor
import { contractTypes } from '../../data/jobs';
import { ContractType } from '../../models/ContractType'
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/Job';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contractTypes: ContractType[] = contractTypes; // une variable attend un type[] = valeur (renvoie au fichier .ts)
  // La variable a été créée pour être accessible dans la vue car les valeurs ne sont pas dispo
  form: FormGroup;
  alertmessenger = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
    private alertService: AlertService) {// appel de notre service pour ajouter à la fonction

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',// Cet objet va permettre la structure de nos données
      company: '',
      city: '',
      zipcode: '',
      description: '',
      contractType: '',
      startDate: '',
      publishedDate: '',
    })
  }

  addJob() {
    this.jobsService
      // appel du service (services/jobs.service.ts) 
      .add(this.form.value) // récupère les éléments du formulaire 
      .subscribe( // si tout se passe bien, en cas de réussite on peut utiliser les flash message pour dire sucess 
        (job: Job) => { // type Job créer dans Job.ts 
          this.form.reset(); // vide le formulaire 
          this.alertService.add('Job ajouté', 'success') // permet de mettre un type de message qui appelera le css de la class .succes
          this.router.navigate(['/jobs'])
        },
        (err) => {
          this.alertmessenger = "L'annonce n'a pas été enregistrée, merci de ré-essayer";// gestion des erreurs
        }
      );
  }
}
