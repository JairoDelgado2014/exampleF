import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import {ClienteService} from '../app/service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
