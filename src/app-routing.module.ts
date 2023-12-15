import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './app/under-construction/under-construction.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "underConstruction", component: UnderConstructionComponent },
  { path: '', redirectTo: '/underConstruction', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
