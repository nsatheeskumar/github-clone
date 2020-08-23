import { ReposActionTypes, RepoAction } from '../actions/repos.action';
import { Repos } from '../models/repos.model';

const initialState: Repos = {
    list: []
};

export function ReposReducer(state: object = initialState, action: RepoAction) {
    switch (action.type) {
        case ReposActionTypes.LOAD_SUCCESS_REPOS:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}
