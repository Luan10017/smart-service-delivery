// import { Evento } from './../classes/Evento';
import { HttpClient } from '@angular/common/http';
import { CoreService } from './core-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService extends CoreService<Evento> {

  constructor(protected override http: HttpClient) {
    super(http, "http://localhost:8080/api/eventos"); 
  }
  
}