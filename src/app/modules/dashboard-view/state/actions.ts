import { Action } from '@ngrx/store';
import { IPagination } from 'src/app/shared/models/pagination.model';
import { IPhoto } from '../models/photo.model';
import { IPost } from '../models/post.model';
import { IPhotoState, IPostState, IRemovedState } from './state';

export enum DashboardActionTypes {
    LOAD_POSTS = '[DASHBOARD] LOAD_POSTS',
    LOAD_POSTS_SUCCESS = '[DASHBOARD] LOAD_POSTS_SUCCESS',
    LOAD_POSTS_FAIL = '[DASHBOARD] LOAD_POSTS_FAIL',
    REMOVE_POST = '[DASHBOARD] REMOVE_POST',
    REMOVE_POST_SUCCESS = '[DASHBOARD] REMOVE_POST_SUCCESS',
    REMOVE_POST_FAIL = '[DASHBOARD] REMOVE_POST_FAIL',
    LOAD_PHOTOS = '[DASHBOARD] LOAD_PHOTOS',
    LOAD_PHOTOS_SUCCESS = '[DASHBOARD] LOAD_PHOTOS_SUCCESS',
    LOAD_PHOTOS_FAIL = '[DASHBOARD] LOAD_PHOTOS_FAIL',
    REMOVE_PHOTO = '[DASHBOARD] REMOVE_PHOTO',
    REMOVE_PHOTO_SUCCESS = '[DASHBOARD] REMOVE_PHOTO_SUCCESS',
    REMOVE_PHOTO_FAIL = '[DASHBOARD] REMOVE_PHOTO_FAIL',
    LOAD_REMOVED = '[DASHBOARD] LOAD_REMOVED',
    LOAD_REMOVED_SUCCESS = '[DASHBOARD] LOAD_REMOVED_SUCCESS',
    LOAD_REMOVED_FAIL = '[DASHBOARD] LOAD_REMOVED_FAIL',
    UPDATE_REMOVED = '[DASHBOARD] UPDATE_REMOVED',
    UPDATE_REMOVED_SUCCESS = '[DASHBOARD] UPDATE_REMOVED_SUCCESS',
    UPDATE_REMOVED_FAIL = '[DASHBOARD] UPDATE_REMOVED_FAIL',
}

export class LoadPosts implements Action {
    readonly type = DashboardActionTypes.LOAD_POSTS;
    constructor(public pagination: IPagination) {}
}

export class LoadPostsSuccess implements Action {
    readonly type = DashboardActionTypes.LOAD_POSTS_SUCCESS;
    constructor(public payload: IPostState) {}
}

export class LoadPostsFail implements Action {
    readonly type = DashboardActionTypes.LOAD_POSTS_FAIL;
    constructor() {}
}

export class RemovePost implements Action {
    readonly type = DashboardActionTypes.REMOVE_POST;
    constructor(public payload: IPost) {}
}

export class RemovePostSuccess implements Action {
    readonly type = DashboardActionTypes.REMOVE_POST_SUCCESS;
    constructor(public payload: IPost) {}
}

export class RemovePostFail implements Action {
    readonly type = DashboardActionTypes.REMOVE_POST_FAIL;
    constructor(public payload: IPost) {}
}

export class LoadPhotos implements Action {
    readonly type = DashboardActionTypes.LOAD_PHOTOS;
    constructor(public pagination: IPagination) {}
}

export class LoadPhotosSuccess implements Action {
    readonly type = DashboardActionTypes.LOAD_PHOTOS_SUCCESS;
    constructor(public payload: IPhotoState) {}
}

export class LoadPhotosFail implements Action {
    readonly type = DashboardActionTypes.LOAD_PHOTOS_FAIL;
    constructor() {}
}

export class RemovePhoto implements Action {
    readonly type = DashboardActionTypes.REMOVE_PHOTO;
    constructor(public payload: IPhoto) {}
}

export class RemovePhotoSuccess implements Action {
    readonly type = DashboardActionTypes.REMOVE_PHOTO_SUCCESS;
    constructor(public payload: IPhoto) {}
}

export class RemovePhotoFail implements Action {
    readonly type = DashboardActionTypes.REMOVE_PHOTO_FAIL;
    constructor(public payload: IPhoto) {}
}

export class LoadRemoved implements Action {
    readonly type = DashboardActionTypes.LOAD_REMOVED;
    constructor() {}
}

export class LoadRemovedSuccess implements Action {
    readonly type = DashboardActionTypes.LOAD_REMOVED_SUCCESS;
    constructor(public payload: IRemovedState) {}
}

export class LoadRemovedsFail implements Action {
    readonly type = DashboardActionTypes.LOAD_REMOVED_FAIL;
    constructor() {}
}

export class UpdateRemoved implements Action {
    readonly type = DashboardActionTypes.UPDATE_REMOVED;
    constructor(public payload: { type: 'post' | 'photo', element: IPost | IPhoto }) {}
}

export class UpdateRemovedSuccess implements Action {
    readonly type = DashboardActionTypes.UPDATE_REMOVED_SUCCESS;
    constructor(public payload: { type: 'post' | 'photo', element: IPost | IPhoto }) {}
}

export class UpdateRemovedsFail implements Action {
    readonly type = DashboardActionTypes.UPDATE_REMOVED_FAIL;
    constructor(public payload: { type: 'post' | 'photo', element: IPost | IPhoto }) {}
}

export type DashboardActions =
    LoadPosts | LoadPostsSuccess | LoadPostsFail
    | RemovePost | RemovePostSuccess | RemovePostFail
    | RemovePhoto | RemovePhotoSuccess | RemovePhotoFail
    | LoadRemoved | LoadRemovedSuccess | LoadRemovedsFail
    | UpdateRemoved | UpdateRemovedSuccess | UpdateRemovedsFail;

