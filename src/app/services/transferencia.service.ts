import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovaTransferencia } from 'src/interfaces/nova-transferencia.interface';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: Array<NovaTransferencia>;
  private url = 'http://localhost:3000/transferencias'
  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get listarTransferencias() {
    return this.listaTransferencias;
  }

  todas (): Observable<NovaTransferencia[]>{
    return this.httpClient.get<NovaTransferencia[]>(this.url)
  }

  adicionar(transferencia: NovaTransferencia): Observable<NovaTransferencia> {
    this.hidratar(transferencia)

    return this.httpClient.post<NovaTransferencia>(this.url, transferencia)
  }

  hidratar(transferencia: NovaTransferencia) {
    transferencia.data = new Date()
  }
}
