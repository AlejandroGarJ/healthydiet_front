import { Component, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getFoods } from '../../store/food/food.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  @ViewChild('myElement') myElement: ElementRef | undefined;
  
  dayOfWeek: string;
  currDate: Date;
  formattedDate: string;

  constructor(public dashboardService: DashboardService, 
              private router: Router,
              private store: Store) {
    this.currDate = new Date();
    this.dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.currDate);
    this.formattedDate = this.formatDate(new Date());
  }

  ngOnInit(){
    this.store.dispatch(getFoods());
    if(this.router.url.split('/')[this.router.url.split('/').length -1] == 'dashboard'){
      this.router.navigate(['/dashboard/diet']);
    } else {
      this.dashboardService.selectedOption = this.dashboardService.findClosestEnumValue(this.router.url.split('/')[this.router.url.split('/').length -1]);
    }
  
    

  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2); 

    return ' ' + day + '/' + month + '/' + year;
  }
  
}
