import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  providers: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
})
export class AppRoutingModule {}
