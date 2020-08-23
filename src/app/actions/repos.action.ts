import { Action } from '@ngrx/store';

export enum ReposActionTypes {
    LOAD_REPOS = '[USERS] Load Repo',
    LOAD_SUCCESS_REPOS = '[USERS] Load Success Repos'
}

export class LoadReposAction implements Action {
    readonly type = ReposActionTypes.LOAD_REPOS;

    constructor(public username: string) { }
}

export class LoadSuccessReposAction implements Action {
    readonly type = ReposActionTypes.LOAD_SUCCESS_REPOS;

    constructor(public payload: Array<object>) { }
}

export type RepoAction = LoadReposAction | LoadSuccessReposAction;
