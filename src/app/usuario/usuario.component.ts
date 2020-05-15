import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  @ViewChild(MatTable, {read: false}) mytable: MatTable<any>;

  dataSource: Usuario[] = []
  displayedColumns: string[] = ['login', 'id', 'repo', 'starred'];

  formUsuario: FormGroup = new FormGroup({
      login: new FormControl()
    }
  );

  ngOnInit() {
  }

  pesquisar() {
    this.usuarioService.getUserByLogin(this.formUsuario.controls.login.value)
      .subscribe(resp=>{
          this.dataSource.push(resp)
    }, error=> {
      console.log(error)
    }, () => {
      this.mytable.renderRows();
    })
  }

}
