import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IDeveloper } from '../interfaces';

@Injectable()
export class DataService {
    
    private url: string = 'http://localhost:3000/api/dataservice/';
    
    constructor(private http: Http) { }
    
    getDevelopers() : Observable<IDeveloper[]> {
        return this.http.get(this.url + 'developers')
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }
    
    updateDeveloper(developer: IDeveloper) {       
      return this.http.put(this.url + 'putDeveloper/' + developer.id, developer)
                 .map((response: Response) => response.json())
                 .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}