import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reactie } from './reactie';

@Injectable({
  providedIn: 'root'
})
export class ReactieService {

  private url: string = "http://localhost:8082/api";
  private endpoint: string = "reactie";

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Reactie[]> {
    return this.httpClient.get<Reactie[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Reactie
  }
  findById(id: Number): Observable<Reactie>{
    return this.httpClient.get<Reactie>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(reactie: Reactie): Observable<Reactie> {
    let resultFromService: Observable<Reactie> = this.httpClient.post<Reactie>(`${this.url}/${this.endpoint}`, reactie);
    return resultFromService;
  }

  adjust(reactie: Reactie): Observable<Reactie> {
    let resultFromService: Observable<Reactie> = this.httpClient.put<Reactie>(`${this.url}/${this.endpoint}/${reactie.id}`, reactie);

    return resultFromService;
  }

  delete(id: Number): Observable<Reactie>{
    return this.httpClient.delete<Reactie>(`${this.url}/${this.endpoint}/${id}`);
  }

}