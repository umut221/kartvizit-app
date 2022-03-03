import { AboutComponent } from './components/about/about.component';
import { AddKartvizitComponent } from './components/add-kartvizit/add-kartvizit.component';
import { KartvizitComponent } from './components/kartvizit/kartvizit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:KartvizitComponent, pathMatch:"full"},
  {path:"kartvizits", component:KartvizitComponent},
  {path:"kartvizits/add", component:AddKartvizitComponent},
  {path:"kartvizits/:id", component:KartvizitComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
