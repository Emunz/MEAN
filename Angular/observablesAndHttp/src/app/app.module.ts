import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { TaskService } from './task.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
