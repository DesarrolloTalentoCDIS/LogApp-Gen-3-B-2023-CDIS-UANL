import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ValidateTokenGuard } from '../guards/validate-token.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
    {
      path: 'login', component: LoginComponent,
      //loadChildren: () => import('PENDIENTE RUTA DEL MODULO').then(m => m.PENDIENTE NOMBRE DEL MODULO), pendienteeeee//
      canActivate: [ValidateTokenGuard],
      canLoad: [ValidateTokenGuard]
    },
    
    {
      path: 'register', component: RegisterComponent,
    },
    {
      path: '**', redirectTo: 'login'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
