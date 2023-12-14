import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { LoginComponent } from './components/authentication/login/login.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    //canActivate: [WebAuthenticationGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [WebAuthenticationGuardService]
  },
  /* {
    path: '**',
    loadChildren: () => import("@common/lib/components/error-page/error-page.module").then(module => module.ErrorPageModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
