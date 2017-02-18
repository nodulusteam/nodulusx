import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SetupService {
  constructor(private http: Http) {
    this.apiUrl = "@nodulus/setup/setup"
  }
  apiUrl: string;
  userToken: string;
  validate(): Observable<Response> {
        return this.http.get(this.apiUrl);
        //.map(this.extractData)
        // .catch(this.handleError);
    }

  }

