import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit, OnChanges {

  confirmacoes = []
  preparacoes = []
  entregas = []
  concluidos = []

  constructor(
    private pedidoService: PedidosService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("mudou")
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getConfirmados()
    this.getPreparacoes()
    this.getEntregando()
    this.getConcluidos()
  }


  getConfirmados() {
    const baseUrl = `${environment.API}pedidos?status=AGUARDANDO_CONFIRMACAO`
    this.pedidoService.getByStatus(baseUrl)
      .subscribe( res => {
        this.confirmacoes = res.data[0]
    })
  }

  getPreparacoes() {
    const baseUrl = `${environment.API}pedidos?status=PREPARANDO`
    this.pedidoService.getByStatus(baseUrl)
      .subscribe( res => {
        this.preparacoes = res.data[0]
    })
  }

  getEntregando() {
    const baseUrl = `${environment.API}pedidos?status=ENTREGANDO`
    this.pedidoService.getByStatus(baseUrl)
      .subscribe( res => {
        this.entregas = res.data[0]
    })
  }

  getConcluidos() {
    const baseUrl = `${environment.API}pedidos?status=CONCLUIDO`
    this.pedidoService.getByStatus(baseUrl)
      .subscribe( res => {
        this.concluidos = res.data[0]
    })
  }

  

}
