import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Css1ComponentComponent } from './css1-component/css1-component.component'
import { Css2ComponentComponent } from './css2-component/css2-component.component'
import { Modal1Component } from './modal1/modal1.component'

const routes: Routes = [
  { path: '', redirectTo: '/css1', pathMatch: 'full' },
  { path: 'css1', component: Css1ComponentComponent},
  { path: 'css2', component: Css2ComponentComponent},
  { path: 'modal1', component: Modal1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
