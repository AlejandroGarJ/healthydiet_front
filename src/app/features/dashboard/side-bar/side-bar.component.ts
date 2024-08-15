import { Component, HostListener } from '@angular/core';
import { DashboardService, options } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  viewportWidth: number = window.innerWidth ? window.innerWidth : 0;
  showResponsiveMenu: boolean = false;
  options = options;

  constructor(public dashboardService: DashboardService, public router: Router){}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.viewportWidth = window.innerWidth;
  }

  logout(){
    localStorage.clear;
    this.router.navigate([''])
  }
  
}
