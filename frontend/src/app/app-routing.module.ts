import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes

import { LoginComponent } from "./components/login/login.component";
import { ViewphotosComponent } from "./components/viewphotos/viewphotos.component";
import { AddphotoComponent } from "./components/addphoto/addphoto.component";
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ViewphotosComponent },
  { path: 'add', component:AddphotoComponent },
  { path: 'edit/:id', component:AddphotoComponent },
  { path: 'search/:term', component: SearchComponent},

  { path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
