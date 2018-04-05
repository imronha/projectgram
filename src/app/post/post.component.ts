import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    projects: Array<Project>;
    projectForm: FormGroup;
  constructor(private _projectService: ProjectService, fb: FormBuilder, private router: Router) {
      this.projectForm = fb.group({
          'title': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
          'url': [null, Validators.required],
          'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(400)])],
      })
  }

  ngOnInit() {
      this._projectService.getProjects()
        .subscribe(res => this.projects = res);
  }

  addProject(project: Project){
      this._projectService.insertProject(project)
      .subscribe(newProject => {
          this.projects.push(newProject);
          this.router.navigateByUrl('/');
      })
  }
}
