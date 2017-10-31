import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CadDisciplinaService } from './caddisciplina.service';
import { CadDisciplina } from './caddisciplina.model';
import { DisciplinaService } from '../disciplina/disciplina.service';
import { Disciplina } from '../disciplina/disciplina.model';

@Component({
  selector: 'app-caddisciplina',
  templateUrl: './caddisciplina.component.html'
})
export class CaddisciplinaComponent implements OnInit {
  public id: number = 0;
  public nome: string;
  public professor: string;
  public disciplina: Disciplina;

  constructor(private caddisciplinaservice: CadDisciplinaService, private router: Router, private activedRouter: ActivatedRoute, private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.activedRouter.params.subscribe((params) => {
      const par = params['id'];

      if (par != null) {
        this.id = Number.parseInt(par);
        this.disciplinaService.carregaDisciplinaById(this.id).subscribe(res => {
          this.disciplina = res[0];
          this.nome = this.disciplina.nome;
          this.professor = this.disciplina.professor;
          console.log(this.nome);
        })
      } else {
        this.id = 0;
      }
    })
  }

  addCadDisciplina(caddisciplina: CadDisciplina) {
    this.caddisciplinaservice.addCadDisciplina(caddisciplina).subscribe((id: number) => {
      this.router.navigate(['/disciplinas'])
    })
  }

  updateCadDisciplina(caddisciplina: CadDisciplina) {
    this.caddisciplinaservice.updateCadDisciplina(caddisciplina, this.id).subscribe((id: number) => {
      this.router.navigate(['/disciplinas'])
    })
  }

  saveCadDisciplina(caddisciplina: CadDisciplina) {
    if (this.id > 0) {
      this.updateCadDisciplina(caddisciplina);
    } else {
      this.addCadDisciplina(caddisciplina);
    }
  }
}
