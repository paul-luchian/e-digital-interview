import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IPhoto } from '../models/photo.model';
import { IPost } from '../models/post.model';
import { IRemovedState } from '../state/state';

@Injectable({
  providedIn: 'root'
})
export class DashboardViewService {

  constructor() { }

  loadRemoved(): Observable<IRemovedState> {
    return of<((IPost | IPhoto) & { removedId: string })[]>([])
      .pipe(
        map((data) => ({ count: data.length, elements: data }))
      );
  }

}
