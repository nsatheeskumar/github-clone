import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ReposComponent } from './components/repos/repos.component';

const routes: Routes = [
  {
    path : '',
    component : UsersComponent
  },
  {
    path : 'repo/:user',
    component : ReposComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
