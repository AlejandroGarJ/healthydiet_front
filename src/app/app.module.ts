import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { AuthComponent } from './features/auth/auth.component';
import { ParametersComponent } from './features/parameters/parameters.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { StoreModule } from '@ngrx/store';
import { foodReducer } from './store/food/food.reducer';
import { FoodEffects } from './store/food.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({ declarations: [
        AppComponent,
        AuthComponent,
        LandingPageComponent,
        CalendarComponent
    ],
    exports: [MatButtonModule],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        RouterModule,
        MatButtonModule,
        FormsModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),      
    ],
         providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
            
    ] })
export class AppModule { }
