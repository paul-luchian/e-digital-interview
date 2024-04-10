import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IPagination } from 'src/app/shared/models/pagination.model';
import { IPost } from '../models/post.model';
import { IPostState } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
  ) {}

  getPosts(pagination: IPagination): Observable<IPostState> {
    return this.http.get<IPost[]>(`${this.baseUrl}`)
      .pipe(
        map((data) => ({
          count: data.length,
          elements: data.slice((pagination.page - 1) * pagination.resultsPerPage, ((pagination.page - 1) * pagination.resultsPerPage) + pagination.resultsPerPage),
        }))
      );
  }

  removePost(element: IPost): Observable<IPost> {
    return of(element);
  }
}
