import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './login-registration/login-registration.component'
import { AllFoodsComponent } from './all-foods/all-foods.component'
import { CreateFoodComponent } from './all-foods/create-food/create-food.component'
import { FoodProfileComponent } from './food-profile/food-profile.component'
import { UpdateFoodComponent } from './food-profile/update-food/update-food.component'
import { DeleteFoodComponent } from './food-profile/delete-food/delete-food.component'

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: LoginRegistrationComponent
    },
    {
      path: 'allfoods',
      component: AllFoodsComponent,
      children: [
        {path: 'addfood', pathMatch: 'full', component: CreateFoodComponent}
      ]
    },
    {
      path: 'food/:id',
      component: FoodProfileComponent,
      children: [
        {path: 'update', pathMatch: 'full', component: UpdateFoodComponent},
        {path: 'delete', pathMatch: 'full', component: DeleteFoodComponent}
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
