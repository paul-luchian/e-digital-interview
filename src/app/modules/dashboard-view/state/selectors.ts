import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPhotoState, IPostState, IRemovedState } from './state';

const postsState = createFeatureSelector<IPostState>('posts');
const photosState = createFeatureSelector<IPhotoState>('photos');
const removedState = createFeatureSelector<IRemovedState>('removed');

export const dashboardState: {
    postsState: (typeof postsState);
    photosState: (typeof photosState);
    removedState: (typeof removedState);
} = {
    postsState,
    photosState,
    removedState,
};

const loadPosts = createSelector(postsState, (state: IPostState) => {
    return state;
});

const loadPhotos = createSelector(photosState, (state: IPhotoState) => {
    return state;
});

const loadRemoved = createSelector(removedState, (state: IRemovedState) => {
    return state;
});

export const dashboardSelectors: {
    loadPosts: (typeof loadPosts);
    loadPhotos: (typeof loadPhotos);
    loadRemoved: (typeof loadRemoved);
} = {
    loadPosts,
    loadPhotos,
    loadRemoved,
};
