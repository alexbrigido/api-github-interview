import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-dialog-starred',
  templateUrl: './dialog-starred.component.html',
  styleUrls: ['./dialog-starred.component.css']
})
export class DialogStarredComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogStarredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dataSource: Usuario[] = []

  ngOnInit() {
    this.dataSource.push(this.data)
  }

}
