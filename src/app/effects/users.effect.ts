import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { LoadSuccessUsersAction, UsersActionTypes, LoadSuccessUserAction, LoadUserAction, SearchUserAction } from '../actions/users.action';
import { HttpService } from '../services/http.service';

@Injectable()
export class UsersEffects {

    @Effect() loadUsers$ = this.actions$
        .pipe(
            ofType<LoadSuccessUsersAction>(UsersActionTypes.LOAD_USERS),
            mergeMap(
                () => this.httpService.getUsersList()
                    .pipe(
                        map(data => {
                            return new LoadSuccessUsersAction(data);
                        })
                    )
            ),
        );

    @Effect() loadUser$ = this.actions$
        .pipe(
            ofType<LoadUserAction>(UsersActionTypes.LOAD_USER),
            mergeMap(
                (action) => {
                    return this.httpService.getUser(action.username)
                    .pipe(
                        map(data => {
                            return new LoadSuccessUserAction(data);
                        })
                    );
                }
            ),
        );

    @Effect() searchUser$ = this.actions$
        .pipe(
            ofType<SearchUserAction>(UsersActionTypes.SEARCH_USER),
            mergeMap(
                (action) => {
                    return this.httpService.searchUser(action.username)
                        .pipe(
                            map((data: any) => {
                                return new LoadSuccessUsersAction(data.items);
                            })
                        );
                }
            ),
        );

    constructor(
        private actions$: Actions,
        private httpService: HttpService
    ) { }
}
