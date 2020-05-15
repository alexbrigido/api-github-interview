import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTable, MatDialog } from '@angular/material';
import { DialogRepositorioComponent } from '../dialog-repositorio/dialog-repositorio.component';
import { DialogStarredComponent } from '../dialog-starred/dialog-starred.component';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    public dialog: MatDialog) { }

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
          if(!this.dataSource.find(item => item.id === resp.id)){
            this.dataSource.push(resp)
            this.mytable.renderRows();
          }
    }, error=> {
      console.log(error)
      swal('Ops!', 'Usuário não encontrado', 'error')
    })
  }

  openDialogRepo(usuario: Usuario): void {
    const dialogRef = this.dialog.open(DialogRepositorioComponent, {
        width: '60%',
        height: '50%',
        data: usuario
      });
      dialogRef.afterClosed().subscribe(result => {
        
      });
  }

  openDialogStarred(usuario: Usuario): void {
    const dialogRef = this.dialog.open(DialogStarredComponent, {
      width: '60%',
      height: '50%',
      data: usuario
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
