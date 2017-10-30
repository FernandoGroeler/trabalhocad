import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Disciplina } from "./disciplina/disciplina.model";
import { APP_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class DisciplinasService {
  constructor(private http: Http) {}

  disciplinas(): Observable<Disciplina[]> {
     return this.http.get(`${APP_API}`).map(response => response.json()).catch(ErrorHandler.handleError);
  }
}
