import { ActionReducerMap } from '@ngrx/store';
import { IPhoto } from '../models/photo.model';
import { IPost } from '../models/post.model';
import { PhotosReducer, PostsReducer, RemoveReducer } from './reducer';

export const dashboardStateFeatureKey = 'dashboardState';

export interface IPostState {
    elements: IPost[];
    count: number;
}

export interface IPhotoState {
    elements: IPhoto[];
    count: number;
}

export interface IRemovedState {
    elements: ((IPost | IPhoto) & { removedId: string })[];
    count: number;
}

export interface IDashboardState {
    posts: IPostState | undefined;
    photos: IPhotoState | undefined;
    removed: IRemovedState | undefined;
};

export const initialState: IDashboardState = {
    photos: undefined,
    posts: undefined,
    removed: undefined,
}

export const reducers: ActionReducerMap<IDashboardState> = {
    photos: PhotosReducer,
    posts: PostsReducer,
    removed: RemoveReducer,
};
