import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ParametersComponent } from './parameters.component';
import { AuthService } from '../auth/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { userAuthGuard } from '../../guards/user-auth.guard';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
    {
        path: '', component: ParametersComponent, canActivate: [userAuthGuard]
    }
];

@NgModule({ declarations: [
        ParametersComponent
    ], imports: [CommonModule,
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MatSliderModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule], providers: [
        AuthService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AuthModule { }
