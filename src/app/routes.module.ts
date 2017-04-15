import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/';
import { DevelopersComponent } from './developers/';
import { UpdateComponent } from './update/';
import { LangagesComponent } from './langages/langages.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'langages', component: LangagesComponent},

];


export const RoutesModule = RouterModule.forRoot(ROUTES, {useHash: true});
