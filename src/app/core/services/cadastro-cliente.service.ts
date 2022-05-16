import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../shared/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  baseUrl = `${environment.API}cadastra/cliente`
  
  constructor(private http: HttpClient) { }

  getUser(baseUrl: string): Observable<any> {
    return this.http.get<any>(baseUrl, {})
  }

  postItem(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl,cliente)
  }

  patchUser(url: string, cliente: Cliente): Observable<any> {
    return this.http.patch<any>(url,cliente)
  }

  recuperaSenha(email: string, url: string): Observable<string> {
    return this.http.post<string>(url,email)
  }
}
