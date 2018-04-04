import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router, ActivatedRoute } from '@angular/router'; // Lets us grab id from URL
// import { routerTransition } from '../animation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  project: Array<Project>

  constructor(private _projectService: ProjectService, private router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe((params) => {
          let id = params['id']; // 'id' comes from app-routing.module.ts from path :id
          this._projectService.getProject(id) // getProject function from project.service.ts
            .subscribe(res => this.project = res);
      })
  }

}
