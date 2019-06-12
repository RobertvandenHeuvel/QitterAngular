import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8082/api";
  private endpoint: string = "gebruiker";

  constructor(private httpClient: HttpClient) { }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type User
  }
  findById(id: Number): Observable<User>{
    return this.httpClient.get<User>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(user: User): Observable<User> {
    let resultFromService: Observable<User> = this.httpClient.post<User>(`${this.url}/${this.endpoint}`, user);

    return resultFromService;
  }

  adjust(user: User): Observable<User> {
    let resultFromService: Observable<User> = this.httpClient.put<User>(`${this.url}/${this.endpoint}/${user.id}`, user);

    return resultFromService;
  }

  delete(id: Number): Observable<User>{
    return this.httpClient.delete<User>(`${this.url}/${this.endpoint}/${id}`);
  }

}