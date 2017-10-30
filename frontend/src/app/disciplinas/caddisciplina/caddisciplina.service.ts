import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'

import { CadDisciplina } from './caddisciplina.model'
import {APP_API} from '../../app.api'

@Injectable()
export class CadDisciplinaService {
  constructor(private http: Http){}

  addCadDisciplina(caddisciplina: CadDisciplina): Observable<number> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${APP_API}/novo`, JSON.stringify(caddisciplina), new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(caddisciplina => caddisciplina.id)
  }

  updateCadDisciplina(caddisciplina: CadDisciplina, id: number): Observable<number> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${APP_API}/edit/${id}`, JSON.stringify(caddisciplina), new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(caddisciplina => id)
  }
}
