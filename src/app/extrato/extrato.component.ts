import { TransferenciaService } from './../services/transferencia.service';
import { NovaTransferencia } from 'src/interfaces/nova-transferencia.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Array<NovaTransferencia> = []

  constructor (private service: TransferenciaService) {}

  ngOnInit () {
    this.service.todas().subscribe((transferencias: NovaTransferencia[]) => {
      console.table(transferencias)
      this.transferencias = transferencias
    })
  }

}
