import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {MenuComponent} from './menu/menu.component';
import { MyHomeComponent} from './my-home/my-home.component';
import {ScenaroComponent} from './scenaro/scenaro.component';
import {ProfileComponent} from './profile/profile.component';
import {LivingRoomComponent} from './living-room/living-room.component';
import {AirConditionComponent} from './air-condition/air-condition.component';
import {GeneralLampComponent} from './general-lamp/general-lamp.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: RegisterPageComponent},
  {path: 'menu',
    component: MenuComponent,
    children: [
      {path: '', redirectTo: 'my-home', pathMatch: 'full'},
      {path: 'my-home', component: MyHomeComponent},
      {path: '', children: [
          {path: '', component: MyHomeComponent},
          {path: 'living-room', component: LivingRoomComponent},
          {path: '', children: [
              {path: '', component: LivingRoomComponent},
              {path: 'air-cond', component: AirConditionComponent}
            ]}
      ]},
      {path: '', children: [
          {path: '', component: MyHomeComponent},
          {path: 'living-room', component: LivingRoomComponent},
          {path: '', children: [
              {path: '', component: LivingRoomComponent},
              {path: 'air-cond', component: AirConditionComponent},
              {path: 'lamp', component: GeneralLampComponent}
            ]}
        ]},
      {path: 'scenario', component: ScenaroComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'lockout', component: LoginPageComponent},
      {path: '**', redirectTo: 'my-home', pathMatch: 'full'}
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
