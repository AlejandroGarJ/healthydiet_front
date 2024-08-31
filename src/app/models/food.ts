import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export type Food = {
    id: number,
    name: string,
    preparation: string,
    ingridients: string,
    calories: number,
    day: Day,
    carbs: number,
    fats: number,
    sodium: number,
    protein: number
}

export enum Day {
    monday = 'monday',
    tuesday =  'tuesday', 
    wednesday = 'wednesday', 
    thursday = 'thursday',
    friday =  'friday',
    saturday =  'saturday',
    sunday =  'sunday'
}

export const foodInit = {
    id: -1,
    name: '',
    preparation: '',
    ingridients: '',
    calories: -1,
    day: Day.monday,
    carbs: -1,
    fats: -1,
    sodium: -1,
    protein: 0
}

