import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { LoadUsersAction, SearchUserAction } from 'src/app/actions/users.action';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userList: Observable<Array<object>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userList = this.store.select(store => store.users.list);

    this.userList.subscribe(data => {
      console.log(data);
    });
    this.store.dispatch(new LoadUsersAction());
  }

  getUserDetails($event): void {
    const username = (document.getElementById('usersAutoComplete') as HTMLInputElement).value;
    if (username.length > 3) {
      this.store.dispatch(new SearchUserAction(username));
    }
  }
}
