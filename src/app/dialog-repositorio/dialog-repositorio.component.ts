import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from '../services/usuario.service';
import { Repositorio } from '../models/repositorio.model';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-dialog-repositorio',
  templateUrl: './dialog-repositorio.component.html',
  styleUrls: ['./dialog-repositorio.component.css']
})
export class DialogRepositorioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRepositorioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dataSource: Usuario[] = []

  ngOnInit() {
    this.dataSource.push(this.data)
  }

}
