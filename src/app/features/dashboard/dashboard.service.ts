import { effect, Injectable, signal, WritableSignal } from '@angular/core';


export enum options {
  diet = 'Diet',
  foodList = 'Food List',
  myInfo = 'My Info',
  config = 'Configuration',
}


@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  selectedOption: string = 'Diet';

  setSelectedOption(option: string){
    if(this.selectedOption !== option){
      this.selectedOption=option;
    }
    
  }

  findClosestEnumValue(route: string): string {
    const routeLower = route.toLowerCase();
    const possibleKeys = Object.keys(options); 
  
    for (let key of possibleKeys) {
      if (routeLower.includes(key.toLowerCase())) {
        return options[key as keyof typeof options];
      }
    }
  
    return 'undefined'; 
  }

}
