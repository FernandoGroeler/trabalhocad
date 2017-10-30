import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html'
})
export class DisciplinaComponent implements OnInit {
  @Input() disciplina: Disciplina;

  constructor(private disciplinaService: DisciplinaService, private router: Router) { }

  ngOnInit() {
  }

  removeDisciplina(disciplina: Disciplina) {
    this.disciplinaService.removeDisciplina(disciplina).subscribe((id: number) => {
      this.router.navigate(['/'])
    })
  }

  carregaDisciplina(disciplina: Disciplina) {
    this.disciplinaService.carregaDisciplina(disciplina).subscribe(disciplina => {
      this.router.navigate([`/caddisciplina/${this.disciplina.id}`])
    })
  }
}
