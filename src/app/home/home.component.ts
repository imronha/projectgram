import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    projects: Array<Project>;
    constructor(private _projectService: ProjectService) { }

    ngOnInit() {
        this._projectService.getProjects()
            .subscribe(res => this.projects = res);
    }

}
