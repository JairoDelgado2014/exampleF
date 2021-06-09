import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente1 = new Cliente;
  id: Number = 0;
  shareKey: String;
  businessId: String;
  email: String;
  phone: String;
  dateAdd: Number;
  estado: Number;
  textPrueba: String;
  closeResult = '';
  constructor(private router: Router, private serviceClient: ClienteService, private modalService: NgbModal) { }

  ngOnInit() {

  }

  guardar() {
    alert(this.estado);
    this.cliente1.businessId = this.businessId;
    this.cliente1.estado = this.estado;
    this.cliente1.shareKey = this.shareKey;
    this.cliente1.phone = this.phone;
    this.cliente1.email = this.email;
    let date: Date = new Date();
    this.cliente1.dateAdd = date.getDate();
    console.log(this.cliente1);
    this.serviceClient.createClient(this.cliente1).subscribe(data => {
      alert("se agrego con exito");
      //this.router.navigate(['listar']);
    })
  } 

}
