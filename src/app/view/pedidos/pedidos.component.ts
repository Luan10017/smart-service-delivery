import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/core/services/pedidos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  confirmacoes = []
  preparacoes = []
  entregas = []
  concluidos = []

  constructor(
    private pedidoService: PedidosService
  ) { }

  ngOnInit(): void {
    this.getConfirmados()
    this.getPreparacoes()
    this.getEntregando()
    this.getConcluidos()

    PedidosService.emitirPedidoStatus
      .subscribe(status =>{
        switch (status) {
          case "AGUARDANDO_CONFIRMACAO":
            this.getConfirmados()
            break
          case "PREPARANDO":
            this.getConfirmados()
            this.getPreparacoes()
            break
          case "ENTREGANDO":
            this.getPreparacoes()
            this.getEntregando()
            break
          case "CONCLUIDO":
            this.getEntregando()
            this.getConcluidos()
            break
        }
      })
    
    this.getNovosPedidosParaConfirmar()
  }

  getNovosPedidosParaConfirmar() {
    setInterval(()=> {
      this.getConfirmados()
    },10000)
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
