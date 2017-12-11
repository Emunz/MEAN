import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ReadComponent } from './read/read.component'
import { UpdateComponent } from './update/update.component'
import { CreateComponent } from './create/create.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: CreateComponent
  },
  {
    path: 'update/:index',
    pathMatch: 'full',
    component: UpdateComponent
  },
  {
    path: 'read',
    pathMatch: 'full',
    component: ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }