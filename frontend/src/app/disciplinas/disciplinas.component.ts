import { Component, OnInit } from '@angular/core';

import { Disciplina } from './disciplina/disciplina.model'
import { DisciplinasService } from './disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html'
})
export class DisciplinasComponent implements OnInit {
  disciplinas: Disciplina[];

  constructor(private disciplinasService: DisciplinasService) { }

  ngOnInit() {
    this.disciplinasService.disciplinas().subscribe(disciplinas => this.disciplinas = disciplinas);
  }
}
