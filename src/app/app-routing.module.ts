import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'registrar', component: RegistrarComponent },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
