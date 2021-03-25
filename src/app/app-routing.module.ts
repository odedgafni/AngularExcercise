import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NasaPageComponent } from './components/nasa-page/nasa-page.component';
import { SquareListComponent } from './components/square-list/square-list.component';

const routes: Routes = [
    { path: 'countries', component: SquareListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nasa', component: NasaPageComponent}
  ];
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }