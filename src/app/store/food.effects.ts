import { Injectable } from "@angular/core";
import { getFoods, getFoodsFailed, getFoodsSuccessfully } from "./food/food.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../features/auth/auth.service";
import { FoodService } from "../services/food.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class FoodEffects {



    getFoods$ = createEffect(() =>
        this.actions$.pipe( 
            ofType(getFoods),
            mergeMap(() =>
                this.foodService.getFoodsByUser(this.authService.getUserId()).pipe(
                    map(foods => getFoodsSuccessfully({ foods })),
                    catchError(error => of(getFoodsFailed({ error }))) 
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private foodService: FoodService
    ) {}
}