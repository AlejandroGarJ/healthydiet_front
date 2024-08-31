import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, FoodState } from "./food.reducer";

export const selectFeature = (state: any) => state.food;
export const selectFoodState = createFeatureSelector<FoodState>('food');
export const selectAllFoods = createSelector(
    selectFeature,
    adapter.getSelectors().selectAll
  );

  export const selectLoading = createSelector(
    selectFoodState,
    (state: FoodState) => state.loading
  );