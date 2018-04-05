import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'; // Headers/RequestOptions needed to add project
import 'rxjs/add/operator/map';
import { Project } from './project';




@Injectable()
export class ProjectService {
    result: any;

    constructor(private _http: Http) { }

    getProjects(){
        // Routing explained lecture 5 section 18 Data Services 3:15
        return this._http.get("/api/projects")
            .map(result => this.result = result.json());
    }

    getProject(id){
        return this._http.get("/api/details/"+id)
            .map(result => this.result = result.json());
    }

    insertProject(project: Project){
        let headers = new Headers({ 'Content-type' : 'applications/json'});
        let options = new RequestOptions({ headers: headers });
        return this._http.post('/api/projects', JSON.stringify(project), options)
            .map(result => this.result = result.json());
    }
}
