import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MatDialogModule, MatAutocompleteModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatPaginatorModule, MatTooltipModule } from '@angular/material';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UsuarioComponent } from './usuario/usuario.component';

let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    UsuarioComponent
  ],
  imports: [
    StorageServiceModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatTableModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFileUploadModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTooltipModule,
    NgxMaskModule.forRoot(options)
  ],
  entryComponents: [
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
