import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { parametersInit } from '../../models/parameters';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../environment/api-rest';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrl: './parameters.component.css',
  animations: [
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ],


})
export class ParametersComponent {

  page: number = -1;
  pageAux: number = -1;
  state = 'in';
  showParametersPage: boolean = false;
  totalPages: number = 7;
  selectedOption: string = "";
  showLoading: boolean  = false;
  countries: string[] = [];
  states: string[] = [];

  parameters = parametersInit;
  transitionTakingPlace: boolean = false;
  constructor(private authService: AuthService, public router: Router, private http: HttpClient) {

  }

  ngOnInit() {


    this.http.get('https://countriesnow.space/api/v0.1/countries')
      .subscribe(
        (res: any) => {
          res.data.forEach((res: any) => {
            this.countries.push(res.country);
          });
        }
      );
  }


  next(form: any = null) {

    if ((form && form.valid || !form) ) {
      if(this.page < this.totalPages-1){
      this.transitionTakingPlace = true;
      if (this.validateForm()) {
        let pageAux = this.page;
        this.page = -2;



        setTimeout(() => {
          this.showParametersPage = true;
          pageAux++;
          this.page = pageAux;
          this.pageAux = this.page;
          this.selectedOption = '';
          this.transitionTakingPlace = false;
        }, 1500);
      }
    } else{
      this.transitionTakingPlace = true;
      if (this.validateForm()) {
        let pageAux = this.page;
        this.page = -2;
        setTimeout(() => {
          pageAux++;
          this.page = pageAux;
          this.pageAux = this.page;
          this.selectedOption = '';
          this.transitionTakingPlace = false;
          this.showLoading = true;
          console.log(this.parameters);
        }, 1500);
      }
      
      }
    } 
  }

  validateForm() {
    console.log(this.page);
    let correct = true;
    if (this.page === 0) {
      console.log(this.parameters.gender);
    }
    
    return correct;
  }


  back() {
    this.transitionTakingPlace = true;
    let pageAux = this.page;
    this.page = -2;


    setTimeout(() => {
      this.showParametersPage = true;
      pageAux--;
      this.page = pageAux;
      this.pageAux = this.page;
      this.transitionTakingPlace = false;
    }, 1500);

  }

  getCities() {
    this.states = [];
    this.http.post('https://countriesnow.space/api/v0.1/countries/states', { 'country': this.selectedOption }).subscribe(
      (res: any) => {
        console.log(res.data.states);
        res.data.states.forEach((state: any) => {
          this.states.push(state.name);
        })
      }
    )
  }

}
