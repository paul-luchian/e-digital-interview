import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IPagination } from 'src/app/shared/models/pagination.model';
import { IPhoto } from '../models/photo.model';
import { IPhotoState } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient,
  ) {}

  getPhotos(pagination: IPagination): Observable<IPhotoState> {
    return this.http.get<IPhoto[]>(`${this.baseUrl}`)
      .pipe(
        map((data) => ({
          count: data.length,
          elements: data.slice((pagination.page - 1) * pagination.resultsPerPage, ((pagination.page - 1) * pagination.resultsPerPage) + pagination.resultsPerPage),
        }))
      );
  }

  removePhoto(element: IPhoto): Observable<IPhoto> {
    return of(element);
  }
}
