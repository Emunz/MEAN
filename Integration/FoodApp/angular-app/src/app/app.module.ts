import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

import { FoodService } from './food.service'
import { UserService } from './user.service';
import { AllFoodsComponent } from './all-foods/all-foods.component';
import { CreateFoodComponent } from './all-foods/create-food/create-food.component';
import { FoodProfileComponent } from './food-profile/food-profile.component';
import { DeleteFoodComponent } from './food-profile/delete-food/delete-food.component';
import { UpdateFoodComponent } from './food-profile/update-food/update-food.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    AllFoodsComponent,
    CreateFoodComponent,
    FoodProfileComponent,
    DeleteFoodComponent,
    UpdateFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    FoodService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
