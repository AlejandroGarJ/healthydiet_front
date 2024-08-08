import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersComponent } from './features/parameters/parameters.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'parameters', loadChildren: () => import('./features/parameters/parameters.module').then(m => m.AuthModule) }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
