export type Parameters = {
    age: number,
    gender: string,
    weight: number,
    height: number,
    weeklyActivity: string,
    objective: string,
    country: string,
    state: string,
    alergies: string,
    alimentaryPreferences: string,
    budget: number,
    foodsPerDay: number,
    timeAvailability: string

}

export const parametersInit: Parameters = {
    age: 14,
    gender: 'masculine',
    weight: 20,
    height: 139,
    weeklyActivity: 'sedentary',
    objective: 'Weight lose',
    country: '',
    state: '',
    alergies: 'None',
    alimentaryPreferences: 'None',
    budget: 50,
    foodsPerDay: 5,
    timeAvailability: 'Low'
}