import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groep } from './groep';

@Injectable({
  providedIn: 'root'
})
export class GroepService {
  private url: string = "http://localhost:8082/api";
  private endpoint: string = "groep";

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Groep[]> {
    return this.httpClient.get<Groep[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Groep
  }
  findById(id: Number): Observable<Groep>{
    return this.httpClient.get<Groep>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(groep: Groep): Observable<Groep> {
    let resultFromService: Observable<Groep> = this.httpClient.post<Groep>(`${this.url}/${this.endpoint}`, groep);

    return resultFromService;
  }

  adjust(groep: Groep): Observable<Groep> {
    let resultFromService: Observable<Groep> = this.httpClient.put<Groep>(`${this.url}/${this.endpoint}/${groep.id}`, groep);

    return resultFromService;
  }

  delete(id: Number): Observable<Groep>{
    return this.httpClient.delete<Groep>(`${this.url}/${this.endpoint}/${id}`);
  }

}
