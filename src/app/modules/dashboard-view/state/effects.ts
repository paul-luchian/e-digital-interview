import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, Observable, of } from 'rxjs';
import { PhotoService } from '../services/photo.service';
import { PostService } from '../services/post.service';
import { DashboardViewService } from '../services/dashboard-view.service';
import { Store } from '@ngrx/store';
import { IDashboardState } from './state';
import * as dashboardActions from './actions';

@Injectable()
export class DashboardEffects {

    loadPosts$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.LOAD_POSTS),
            mergeMap((action: dashboardActions.LoadPosts) => {
                return this.postService.getPosts(action.pagination)
                    .pipe(
                        map((posts) => { return new dashboardActions.LoadPostsSuccess(posts); })
                    );
            })
        );
    });

    removePost$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.REMOVE_POST),
            mergeMap((action: dashboardActions.RemovePost) => {
                return this.postService.removePost(action.payload)
                    .pipe(
                        map((post) => {
                            this.store.dispatch(new dashboardActions.UpdateRemoved({ type: 'post', element: post }));
                            return new dashboardActions.RemovePostSuccess(post);
                        })
                    );
            })
        );
    });

    loadPhotos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.LOAD_PHOTOS),
            mergeMap((action: dashboardActions.LoadPhotos) => {
                return this.photoService.getPhotos(action.pagination)
                    .pipe(
                        map((photos) => { return new dashboardActions.LoadPhotosSuccess(photos); })
                    );
            })
        );
    });

    removePhoto$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.REMOVE_PHOTO),
            mergeMap((action: dashboardActions.RemovePhoto) => {
                return this.photoService.removePhoto(action.payload)
                    .pipe(
                        map((photo) => {
                            this.store.dispatch(new dashboardActions.UpdateRemoved({ type: 'photo', element: photo }));
                            return new dashboardActions.RemovePhotoSuccess(photo);
                        })
                    );
            })
        );
    });

    loadRemoved$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.LOAD_REMOVED),
            mergeMap(() => {
                return this.dashboardViewService.loadRemoved()
                    .pipe(
                        map((removed) => { return new dashboardActions.LoadRemovedSuccess(removed); })
                    );
            })
        );
    });

    updateRemoved$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(dashboardActions.DashboardActionTypes.UPDATE_REMOVED),
            map((action: dashboardActions.UpdateRemoved) => {
                return new dashboardActions.UpdateRemovedSuccess(action.payload);
            }),
        );
    });

    constructor(
        private postService: PostService,
        private photoService: PhotoService,
        private dashboardViewService: DashboardViewService,
        private actions$: Actions,
        private store: Store<IDashboardState>
    ) {}
}
