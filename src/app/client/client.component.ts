import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Router, Routes } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cliente: Cliente[];
  constructor(private serviceCliente: ClienteService, private router: Router) { }

  ngOnInit() {
    this.serviceCliente.getClient().subscribe(data => {
      this.cliente = data;
    })
  }

  new(){

  }
  export(){
    
  }

}
