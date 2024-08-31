import { Component, HostListener } from '@angular/core';
import { filter, groupBy, lastValueFrom, map, Observable, take } from 'rxjs';
import { Food, Day, foodInit } from '../../../models/food';
import { Store } from '@ngrx/store';
import { selectAllFoods, selectLoading } from '../../../store/food/food.selectors';
import { getFoods } from '../../../store/food/food.actions';
import { FoodService } from '../../../services/food.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  
  

  foods$:  Observable<Food[]>;
  loading$: Observable<boolean>;
  maxRows: number = 0;
  day = Day;
  foodSelected: Food = foodInit;
  ingridientsList: string[] = [];

  foodModalPosition = { x: 0, y: 0, show: false };
  constructor(private store: Store
              ){
    this.foods$ = this.store.select(selectAllFoods);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit() {
  
    this.getFoodsPerDay();
    
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    
    
    const foodInfo = document.getElementById('foodInfo');
    const food = clickedElement.closest('.food');

    //If !foodInfo, foodInfo is not renderized, and if !food, click is out of food 
    if(!food && !foodInfo?.contains(clickedElement)){
      this.foodModalPosition.show = false;
      this.foodSelected = foodInit;
    }
    
  }

getFoodsPerDay(){
  this.foods$.subscribe(
    (foods) => {
  
      foods.forEach(food => {
        if(food.day === this.day.monday) this.maxRows++;
      });
      console.log(this.maxRows);
    }
  )
}

getFood(day: string, index: number) {
  return this.foods$.pipe(
    map(foods => {
      const filteredFoods = foods.filter(food => food.day === day);
      return filteredFoods[index] || null; 
    })
  );
}

getDayValues(): string[] {
  return Object.values(Day);
}

showFoodInfo(food: Food, event: MouseEvent){
  let clickedElement = event.target as HTMLElement;
  let modalElement = document.getElementById('foodInfo') as HTMLElement;
  let height = 0;
  let width = 0;
  if(event.clientY > window.innerHeight / 2){
    height = event.clientY - 400;
  }
  if(event.clientX > window.innerWidth / 1.5){
    width = event.clientX - 600;
  }
  this.foodModalPosition = { x: width === 0 ? event.clientX : width, y: height === 0 ? event.clientY : height, show: true };
  this.foodSelected = food;

  console.log(this.foodSelected.ingridients);

  this. ingridientsList = this.foodSelected.ingridients.split(',');
  this.ingridientsList = this.ingridientsList.map(ingridient => {
    return  ingridient.replace(/\b\w/g, char => char.toUpperCase());
  });
  console.log(this.ingridientsList);
}

}
