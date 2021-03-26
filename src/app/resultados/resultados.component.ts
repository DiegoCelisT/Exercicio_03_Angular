import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //new
import { GiphyService } from '../giphy.service'; //new (se importou sozinho quando fiz a injeção de dependência)

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  idzao: string;  //new
  resultados_gomelos: any;  //new

  constructor( private route_dos_resultados: ActivatedRoute, private resultados_servico: GiphyService ) { } //new

  ngOnInit(): void {
  
  //NEW:
  this.route_dos_resultados.params.subscribe ( 
    meus_resultados_irados => {

    this.idzao= meus_resultados_irados ['pesquisa'];

    this.resultados_servico.getGIFS (this.idzao)
    .subscribe (resultados_gomelos => {
      this.resultados_gomelos =resultados_gomelos
    });
    })
  }
}