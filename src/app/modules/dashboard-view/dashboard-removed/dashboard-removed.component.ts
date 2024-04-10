import { Component, Input, OnInit } from '@angular/core';
import { IDashboardState } from '../state/state';
import { Store, select } from '@ngrx/store';
import { LoadRemoved } from '../state/actions';
import { dashboardSelectors } from '../state/selectors';
import { IPost } from '../models/post.model';
import { Subject, takeUntil } from 'rxjs';
import { IPhoto } from '../models/photo.model';
import { IPagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-dashboard-removed',
  templateUrl: './dashboard-removed.component.html',
  styleUrls: ['./dashboard-removed.component.scss']
})
export class DashboardRemovedComponent implements OnInit {

  @Input() height: number = 200;

  elements: ((IPost | IPhoto) & { removedId: string })[] | undefined;

  count: number | undefined;

  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IDashboardState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadRemoved());

    this.store
      .pipe(
        select(dashboardSelectors.loadRemoved),
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

  removedTrackBy(index: number, removed: (IPost | IPhoto) & { removedId: string }): string {
    return removed.removedId;
  }

}
