import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CircularChartComponent } from './circular-chart/circular-chart.component';
import { Chart } from 'chart.js';


@NgModule({
  declarations: [
    ButtonComponent,
    CircularChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CircularChartComponent
  ]
})
export class SharedModule { }
