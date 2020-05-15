import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private parametrosApiUrl = environment.url_api  + '/users';

  constructor(private http: HttpClient) { 
    // empty constructor
  }

  getUserByLogin(login: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.parametrosApiUrl}/${login}`)
  }

}
