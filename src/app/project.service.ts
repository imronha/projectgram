import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



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
}
