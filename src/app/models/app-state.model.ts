import { Users } from './users.model';
import { Repos } from './repos.model';

export interface AppState {
    readonly users: Users;
    readonly repos: Repos;
}
