import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../../models/food';
import { Store } from '@ngrx/store';
import { selectAllFoods } from '../../../store/food/food.selectors';
import { getFoods } from '../../../store/food/food.actions';
import { FoodService } from '../../../services/food.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

  
}
