import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Repositorio } from '../models/repositorio.model';
import { Starred } from '../models/starred.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url_users = environment.url_api  + '/users';

  constructor(private http: HttpClient) { 
    // empty constructor
  }

  getUserByLogin(login: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url_users}/${login}`)
  }

  getReposUser(repos_url: string): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(repos_url)
  }

  getStarredUser(starred_url: string): Observable<Starred> {
    return this.http.get<Usuario>(starred_url)
  }
}
