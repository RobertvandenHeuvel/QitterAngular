import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = "http://localhost:8082/api";
  private endpoint: string = "post";

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/${this.endpoint}`); // returns an Observable of type Post
  }
  findById(id: Number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(post: Post): Observable<Post> {
    let resultFromService: Observable<Post> = this.httpClient.post<Post>(`${this.url}/${this.endpoint}`, post);
    return resultFromService;
  }

  adjust(post: Post): Observable<Post> {
    let resultFromService: Observable<Post> = this.httpClient.put<Post>(`${this.url}/${this.endpoint}/${post.id}`, post);

    return resultFromService;
  }

  delete(id: Number): Observable<Post>{
    return this.httpClient.delete<Post>(`${this.url}/${this.endpoint}/${id}`);
  }

}