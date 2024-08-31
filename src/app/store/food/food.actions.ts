import { createAction, props } from "@ngrx/store";
import { Food } from "../../models/food";


export const getFoods = createAction(
    '[Food] Get foods'
);

export const getFoodsSuccessfully = createAction(
    '[Foods] Foods Get Succesfully',
    props<{ foods: Food[] }>()
)

export const getFoodsFailed = createAction(
    '[Foods] Foods Get Failed',
    props<{ error: string }>()
)