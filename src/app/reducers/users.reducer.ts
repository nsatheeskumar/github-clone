import { UsersActionTypes, UserAction } from '../actions/users.action';
import { Users } from '../models/users.model';

const initialState: Users = {
    user : {},
    list: []
};

export function UsersReducer(state: object = initialState, action: UserAction) {
    switch (action.type) {
        case UsersActionTypes.LOAD_SUCCESS_USERS:
            return {
                ...state,
                list : action.payload
            };
        case UsersActionTypes.LOAD_SUCCESS_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
