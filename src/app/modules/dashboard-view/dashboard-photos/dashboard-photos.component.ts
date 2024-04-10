import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IDashboardState } from '../state/state';
import { Store, select } from '@ngrx/store';
import { LoadPhotos, RemovePhoto } from '../state/actions';
import { dashboardSelectors } from '../state/selectors';
import { IPhoto } from '../models/photo.model';
import { Subject, takeUntil } from 'rxjs';
import { IPagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-dashboard-photos',
  templateUrl: './dashboard-photos.component.html',
  styleUrls: ['./dashboard-photos.component.scss']
})
export class DashboardPhotosComponent implements OnInit, OnDestroy {

  @Input() height: number = 200;

  elements: IPhoto[] | undefined;

  count: number | undefined;

  pagination: IPagination = {
    page: 1,
    resultsPerPage: 10,
  };

  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IDashboardState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadPhotos(this.pagination));

    this.store
      .pipe(
        select(dashboardSelectors.loadPhotos),
        takeUntil(this.unsubscribe$)
      ).subscribe({
        next: (data) => {
          this.elements = data?.elements;
          this.count = data?.count;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  photoTrackBy(index: number, photo: IPhoto): number {
    return photo.id;
  }

  onDeletePhoto(element: IPhoto): void {
    this.store.dispatch(new RemovePhoto(element));
  }

  onScroll($event: Event): void {
    const { scrollTop, scrollHeight } = $event.target as HTMLElement;
    if (scrollHeight - scrollTop === this.height) {
      this.pagination = { ...this.pagination, page: this.pagination.page + 1 };
      this.store.dispatch(new LoadPhotos(this.pagination));
    }
  }

}
