
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DietComponent } from './diet/diet.component';
import path from 'path';
import { FoodListComponent } from './food-list/food-list.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { ConfigurationComponent } from './configuration/configuration.component';


const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            {path: 'diet', component: DietComponent},
            {path: 'foodlist', component: FoodListComponent},
            {path: 'myinfo', component: MyInfoComponent},
            {path: 'config', component: ConfigurationComponent}
        ]
    }
];

@NgModule({
    declarations: [
        DashboardComponent,
        SideBarComponent,
        DietComponent,
        FoodListComponent,
        MyInfoComponent,
        ConfigurationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
       

    ],
    providers: [
        AuthService,
    ]
})
export class DashboardModule { }
