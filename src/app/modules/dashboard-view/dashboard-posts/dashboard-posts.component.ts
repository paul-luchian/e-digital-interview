import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IDashboardState } from '../state/state';
import { Store, select } from '@ngrx/store';
import { LoadPosts, RemovePost } from '../state/actions';
import { dashboardSelectors } from '../state/selectors';
import { IPost } from '../models/post.model';
import { Subject, takeUntil } from 'rxjs';
import { IPagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-dashboard-posts',
  templateUrl: './dashboard-posts.component.html',
  styleUrls: ['./dashboard-posts.component.scss']
})
export class DashboardPostsComponent implements OnInit, OnDestroy {

  @Input() height: number = 200;

  elements: IPost[] | undefined;

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
    this.store.dispatch(new LoadPosts(this.pagination));

    this.store
      .pipe(
        select(dashboardSelectors.loadPosts),
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

  postTrackBy(index: number, post: IPost): number {
    return post.id;
  }

  onDeletePost(element: IPost): void {
    this.store.dispatch(new RemovePost(element));
  }

  onScroll($event: Event): void {
    const { scrollTop, scrollHeight } = $event.target as HTMLElement;
    if (scrollHeight - scrollTop === this.height) {
      this.pagination = { ...this.pagination, page: this.pagination.page + 1 };
      this.store.dispatch(new LoadPosts(this.pagination));
    }
  }

}
