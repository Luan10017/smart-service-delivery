import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  baseUrl = "174.129.164.95:8080/cadastra/cliente"
  // baseUrl = "http://localhost:8080/cadastra/cliente"
  
  constructor(private http: HttpClient) { }

  postItem(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }
}
