import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SingupComponent } from './users/singup/singup.component';
const routes: Routes = [
  {
    path:'logina',component:LoginComponent
  },
  {
    path:'signupa',component:SingupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
