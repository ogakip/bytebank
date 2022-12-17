import { TransferenciaService } from './services/transferencia.service';
import { NovaTransferencia } from 'src/interfaces/nova-transferencia.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {}
}
