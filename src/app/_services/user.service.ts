import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public postUser(userData): Observable<IUser> {
    console.log('userData in service', userData);
    return this.http.post<IUser>('https://jsonplaceholder.typicode.com/posts', userData);
  }
}

