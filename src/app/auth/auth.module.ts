import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginService } from './login/login.service';

import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule]
})
export class AuthModule {}
