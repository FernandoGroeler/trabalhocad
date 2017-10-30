import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';
import { CaddisciplinaComponent } from './disciplinas/caddisciplina/caddisciplina.component';
import { ErrorHandler } from './app.error-handler';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'disciplinas', component: DisciplinasComponent},
  {path: 'disciplina', component: DisciplinaComponent },
  {path: 'caddisciplina', component: CaddisciplinaComponent},
  {path: 'caddisciplina/:id', component: CaddisciplinaComponent},
  {path: '**', component: ErrorHandler}
]
