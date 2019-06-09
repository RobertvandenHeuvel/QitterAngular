import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private url: string = "http://localhost:8082/api";
  private endpoint: string = "groep";

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Group
  }
  findById(id: Number): Observable<Group>{
    return this.httpClient.get<Group>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(group: Group): Observable<Group> {
    let resultFromService: Observable<Group> = this.httpClient.post<Group>(`${this.url}/${this.endpoint}`, group);

    return resultFromService;
  }

  adjust(group: Group): Observable<Group> {
    let resultFromService: Observable<Group> = this.httpClient.put<Group>(`${this.url}/${this.endpoint}/${group.id}`, group);

    return resultFromService;
  }

  delete(id: Number): Observable<Group>{
    return this.httpClient.delete<Group>(`${this.url}/${this.endpoint}/${id}`);
  }

}
