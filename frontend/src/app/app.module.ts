import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './shared/input/input.component';
import { HeaderComponent } from './header/header.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinasService } from './disciplinas/disciplinas.service';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';
import { DisciplinaService } from './disciplinas/disciplina/disciplina.service';
import { CaddisciplinaComponent } from './disciplinas/caddisciplina/caddisciplina.component';
import { CadDisciplinaService } from './disciplinas/caddisciplina/caddisciplina.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    HeaderComponent,
    DisciplinasComponent,
    DisciplinaComponent,
    CaddisciplinaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DisciplinasService, DisciplinaService, CadDisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
