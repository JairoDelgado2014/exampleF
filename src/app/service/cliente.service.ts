import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private guardar: string = "http://localhost:9090/client/guardar";
  private listar: string = "http://localhost:9090/client/listar";
  cliente: Cliente[];
  constructor(private http: HttpClient) { }

  //Llamar los clientes de bd
  getClient() {
    return this.http.get<Cliente[]>(this.listar);
  }
  createClient(cliente: Cliente) {
    return this.http.post<Cliente>(this.guardar, cliente);
  }

}
