import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Disciplina } from './disciplina.model';
import { APP_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler';

@Injectable()
export class DisciplinaService {
  constructor(private http: Http) {}

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  removeDisciplina(disciplina: Disciplina): Observable<number> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${APP_API}/delete/${disciplina.id}`, new RequestOptions({headers: headers}))
      .map(success => success.status)
      .catch(ErrorHandler.handleError);
  }

  carregaDisciplina(disciplina: Disciplina): Observable<Disciplina> {
     return this.http.get(`${APP_API}/${disciplina.id}`).map(response => response.json()).catch(ErrorHandler.handleError);
  }
}
