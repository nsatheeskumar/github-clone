import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { LoadReposAction, LoadSuccessReposAction, ReposActionTypes } from '../actions/repos.action';
import { HttpService } from '../services/http.service';

@Injectable()
export class RepoEffects {

    @Effect() loadRepo$ = this.actions$
        .pipe(
            ofType<LoadReposAction>(ReposActionTypes.LOAD_REPOS),
            mergeMap(
                (action) => {
                    return this.httpService.getRepos(action.username)
                        .pipe(
                            map(data => {
                                return new LoadSuccessReposAction(data);
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
