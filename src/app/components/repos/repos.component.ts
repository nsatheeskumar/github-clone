import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { LoadUserAction, LoadSuccessUserAction } from 'src/app/actions/users.action';
import { ActivatedRoute } from '@angular/router';
import { LoadReposAction } from 'src/app/actions/repos.action';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ReposComponent implements OnInit {

  public userInfo$: Observable<object>;
  public repoInfo$: Observable<Array<object>>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userInfo$ = this.store.select(store => store.users.user);
    this.repoInfo$ = this.store.select(store => store.repos.list);

    const user = this.route.snapshot.paramMap.get('user');
    this.store.dispatch(new LoadUserAction(user));
    this.store.dispatch(new LoadReposAction(user));
  }

}
