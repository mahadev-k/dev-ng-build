import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { HomeComponent } from './home/home.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", pathMatch:"full", redirectTo:"home"},
  {path:"sort", component:SortComponent},
  {path:"algos", component:AlgorithmsComponent},
  {path:"about", component:AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
