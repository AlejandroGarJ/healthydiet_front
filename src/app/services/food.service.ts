import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Observable } from 'rxjs';
import { AuthService } from '../features/auth/auth.service';
import { apiUrl } from '../environment/api-rest';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getFoodsByUser(userIdToken: string): Observable<Food[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + userIdToken
    })
    return this.http.get<any>(`${apiUrl}/protected/getFoods`, { headers });
  }
}
