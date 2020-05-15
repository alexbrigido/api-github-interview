import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Repositorio } from '../models/repositorio.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-dialog-repositorio',
  templateUrl: './dialog-repositorio.component.html',
  styleUrls: ['./dialog-repositorio.component.css']
})
export class DialogRepositorioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogRepositorioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService) { }

  dataSource: Repositorio[] = []
  displayedColumns: string[] = ['id', 'name', 'full_name']

  ngOnInit() {
    this.usuarioService.getReposUser(this.data).subscribe(resp=>{
      this.dataSource = resp
    }, error => {
      console.log(error)
    })
  }

}
