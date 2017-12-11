import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotesPrivateComponent } from './notes/notes-private/notes-private.component';
import { NotesComponent } from './notes/notes.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: LandingComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'notes',
    component: NotesComponent,
    // pathMatch: 'full',
    children: [
      {path: 'private', component: NotesPrivateComponent}
    ]
  },
  {
    path: 'gohome',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
