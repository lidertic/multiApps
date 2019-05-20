import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Sub Applications
import { App1SharedModule } from '../../projects/sub-app1/src/app/app.module';
import { App2SharedModule } from '../../projects/sub-app2/src/app/app.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app1',
    loadChildren: '../../projects/sub-app1/src/app/app.module#App1SharedModule'
  },
  {
    path: 'app2',
    loadChildren: '../../projects/sub-app2/src/app/app.module#App2SharedModule'
  },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
