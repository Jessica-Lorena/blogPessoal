import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute, //captura o id da barra de navegação
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    let id: number = this.route.snapshot.params["id"]; //ActivateRoute
    this.findByIdTema(id);
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  salvar() {
    if (this.tema.postagem.length != 0) {
      this.alert.showAlertWarning('Esse tema não pode ser modificado, pois já pertence a uma postagem.')
      this.router.navigate(['/add-tema'])
    } else if (this.tema.descricao == null || this.tema.descricao == '') {
      this.alert.showAlertDanger('O nome do tema não pode ser nulo!')
    } else {
      this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
        this.router.navigate(['/add-tema'])
        this.alert.showAlertSuccess('Tema atualizado com sucesso!')
      })
    }
  }
}
