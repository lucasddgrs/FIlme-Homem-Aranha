import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.page.html',
  styleUrls: ['./descricao.page.scss'],
})
export class DescricaoPage implements OnInit {

  constructor(private route: ActivatedRoute, private rota: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
        this.nameRecebido = params['name'];
      })
  }
    nameRecebido:string = '';

}
