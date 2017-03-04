import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ILoginResult } from './login.common'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService {
    constructor(private http: Http) {
        this.apiUrl = "@nodulus/users/login";
        let user = localStorage.getItem('user');
        if (user)
            this.user = JSON.parse(user);

    }
    public user: any;
    apiUrl: string;
    userToken: string;
    public login(email: string, passowrd: string): Observable<Response> {
        return this.http.post(this.apiUrl, { email: email, password: passowrd })
            .map(this.extractData)


        // .catch(this.handleError);
    }

    public checkToken(): boolean {
        return this.user !== null && this.user !== undefined;
        // return this.userToken !== null && this.userToken !== undefined;
    }
    private extractData(res: Response) {
        let body = JSON.parse((res as any)._body);
        this.user = body;
        localStorage.setItem('user', JSON.stringify(body));
        return body || {};
    }
    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }




}