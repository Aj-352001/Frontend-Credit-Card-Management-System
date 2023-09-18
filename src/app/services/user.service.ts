import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUser } from '../class/AppUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl ='http://localhost:8090/api/v1';

  constructor(private http: HttpClient) { }

  login(user:AppUser) : Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login/`, user);
  }
  registerUser(user: AppUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/`, user,{responseType:"text"});
  }

  otpVerification(user: AppUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/otp/`, user);
  }
  resetPassword(user: AppUser): Observable<any> {
    return this.http.patch(`${this.baseUrl}/user/`, user);
  }

}