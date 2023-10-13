import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectedAppContainerComponent} from "./protected-app-container/protected-app-container.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProtectedAppContainerComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedAppRoutingModule { }
