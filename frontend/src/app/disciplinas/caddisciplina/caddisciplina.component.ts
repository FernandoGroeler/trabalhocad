import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CadDisciplinaService } from './caddisciplina.service';
import { CadDisciplina } from './caddisciplina.model';

@Component({
  selector: 'app-caddisciplina',
  templateUrl: './caddisciplina.component.html'
})
export class CaddisciplinaComponent implements OnInit {
  public id: number = 0;

  constructor(private caddisciplinaservice: CadDisciplinaService, private router: Router, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activedRouter.params.subscribe((params) => {
      const par = params['id'];

      if (par != null) {
        this.id = Number.parseInt(par);
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
