import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { NovaTransferencia } from 'src/interfaces/nova-transferencia.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<NovaTransferencia>();

  constructor (private service: TransferenciaService, private router: Router) {}

  valor: number = 0;
  destino: number = 0;

  transferir() {
    const pegarValores = {
      valor: this.valor,
      destino: this.destino
    }

    this.service.adicionar(pegarValores).subscribe((resultado) => {
      console.log(resultado)
      this.router.navigateByUrl('extrato')
    }, (error) => {
      console.log(error)
    })
  }
}
