import { Action } from '@ngrx/store';

export enum UsersActionTypes {
    LOAD_USERS = '[USERS] Load Users',
    LOAD_SUCCESS_USERS = '[USERS] Load Success Users',
    LOAD_USER = '[USER] Load User',
    LOAD_SUCCESS_USER = '[USER] LOAD SUCCESS USER',
    SEARCH_USER = '[USER] Search User'
}

export class LoadUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadSuccessUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS_USERS;

    constructor(public payload: Array<object>) { }
}

export class LoadUserAction implements Action {
    readonly type = UsersActionTypes.LOAD_USER;

    constructor(public username: string) {
    }
}

export class LoadSuccessUserAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS_USER;

    constructor(public payload: object) { }
}

export class SearchUserAction implements Action {
    readonly type = UsersActionTypes.SEARCH_USER;

    constructor(public username: string) {
    }
}

export type UserAction = SearchUserAction | LoadUsersAction | LoadSuccessUsersAction | LoadUserAction | LoadSuccessUserAction;
