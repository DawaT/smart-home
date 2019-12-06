import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatDialogModule, MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSliderModule} from '@angular/material/slider';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MenuComponent } from './menu/menu.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { ScenaroComponent } from './scenaro/scenaro.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LivingRoomComponent } from './living-room/living-room.component';
import { AirConditionComponent } from './air-condition/air-condition.component';
import {MatSlideToggleModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { GeneralLampComponent } from './general-lamp/general-lamp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MenuComponent,
    MyHomeComponent,
    ScenaroComponent,
    ProfileComponent,
    LivingRoomComponent,
    AirConditionComponent,
    DialogComponent,
    GeneralLampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
