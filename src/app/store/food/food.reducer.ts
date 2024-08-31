import { createReducer, on } from "@ngrx/store";
import {  Food } from "../../models/food";
import { state } from "@angular/animations";
import { getFoods, getFoodsFailed, getFoodsSuccessfully } from "./food.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface FoodState extends EntityState<Food> {
  loading: boolean;
  error: string | undefined;
}

export const adapter: EntityAdapter<Food> = createEntityAdapter<Food>({
  selectId: (food) => food.id,
  sortComparer: false, 
});

export const initialState: FoodState = adapter.getInitialState({
    loading: false,
    error: undefined,
  });

export const foodReducer = createReducer(
    initialState,
    on(getFoods, (state) => ({...state, loading: true})),
    on(getFoodsSuccessfully, (state, { foods }) => adapter.setAll(foods, { ...state, loading: false })),
    on(getFoodsFailed, (state, { error }) => ({ ...state, error, loading: false }))
)