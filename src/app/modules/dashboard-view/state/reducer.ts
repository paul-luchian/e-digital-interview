import { Action } from '@ngrx/store';
import { IPhoto } from '../models/photo.model';
import { IPost } from '../models/post.model';
import { DashboardActionTypes, LoadPhotosSuccess, LoadPostsSuccess, LoadRemovedSuccess, RemovePhotoSuccess, RemovePostSuccess, UpdateRemovedSuccess } from './actions';
import { initialState, IPhotoState, IPostState, IRemovedState } from './state';

export function PostsReducer(state = initialState.posts, action: Action): IPostState | undefined {
    switch(action.type) {
        case DashboardActionTypes.LOAD_POSTS_SUCCESS: {
            const { count, elements } = (action as LoadPostsSuccess).payload;
            const newElements = [...state?.elements ?? []] ;
            newElements.push(...elements)
            return {
                count: count,
                elements: newElements,
            }
        }
        case DashboardActionTypes.REMOVE_POST_SUCCESS: {
            const element: IPost = (action as RemovePostSuccess).payload;
            const tempElements: IPost[] = [...state!.elements];
            tempElements.splice(tempElements.findIndex((el) => el.id === element.id), 1);
            return {
                count: state!.count - 1,
                elements: tempElements,
            };
        }
        case DashboardActionTypes.LOAD_POSTS_FAIL:
        default: {
            return state;
        }
    }
};

export function PhotosReducer(state = initialState.photos, action: Action): IPhotoState | undefined {
    switch(action.type) {
        case DashboardActionTypes.LOAD_PHOTOS_SUCCESS: {
            const { count, elements } = (action as LoadPhotosSuccess).payload;
            const newElements = [...state?.elements ?? []] ;
            newElements.push(...elements)
            return {
                count: count,
                elements: newElements,
            }
        }
        case DashboardActionTypes.REMOVE_PHOTO_SUCCESS: {
            const element: IPhoto = (action as RemovePhotoSuccess).payload;
            const tempElements: IPhoto[] = [...state!.elements];
            tempElements.splice(tempElements.findIndex((el) => el.id === element.id), 1);
            return {
                count: state!.count - 1,
                elements: tempElements,
            };
        }
        case DashboardActionTypes.LOAD_PHOTOS_FAIL:
        default: {
            return state;
        }
    }
};

export function RemoveReducer(state = initialState.removed, action: Action): IRemovedState | undefined {
    switch(action.type) {
        case DashboardActionTypes.LOAD_REMOVED_SUCCESS: {
            return (action as LoadRemovedSuccess).payload;
        }
        case DashboardActionTypes.UPDATE_REMOVED_SUCCESS: {
            const el: { type: 'post' | 'photo', element: IPost | IPhoto } = (action as UpdateRemovedSuccess).payload;
            const tempElements: ((IPost | IPhoto) & { removedId: string })[] = [...(state?.elements ?? [])];
            tempElements.push({
                ...el.element,
                removedId: `${el.type}-${el.element.id}`,
            });
            return {
                count: (state?.count ?? 0) + 1,
                elements: tempElements,
            };
        }
        case DashboardActionTypes.LOAD_REMOVED_FAIL:
        default: {
            return state;
        }
    }
};
