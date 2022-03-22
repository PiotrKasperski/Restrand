import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatTabsModule} from "@angular/material/tabs";
import { UserComponent } from './user/user.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


//TODO: Wyłaczenie dialogu po zalogowaniu
//TODO: Info o wymaganym logowaniu

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UserComponent,
    UserDialogComponent
  ],
  exports: [
    UserDialogComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UsersModule { }
