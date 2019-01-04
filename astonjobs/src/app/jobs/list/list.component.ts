import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/Job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jobs : Job[] =[]; // permettra de lister le tableau de jobs dans la vue
  constructor(private jobsService : JobsService) { }

  ngOnInit() { // une sorte de deuxième constructor
    this.jobsService
        .all()
        .subscribe(
          data => {
            this.jobs = data; // on donne le résultat de la requete à notre tableau
          }
        );
  }

}
