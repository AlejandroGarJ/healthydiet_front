import { Injectable } from '@angular/core';
import { apiUrl } from '../../environment/api-rest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  sendRegisterForm(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${apiUrl}/sendConfirmationEmail`, body);
  }

  checkRegistrationToken(token: any) {
    const body = { token };
    return this.http.post<any>(`${apiUrl}/checkRegistrationToken`, body);
  }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<any>(`${apiUrl}/login`, body);
  }

  checkUserAuth(token: any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { token: token };
    return this.http.post<any>(`${apiUrl}/checkUserAuth`, body, { headers });
  }

  getUserId(): string {
    const userIdToken = localStorage.getItem('userAuth');
    return userIdToken ? userIdToken : '';
  }
}
