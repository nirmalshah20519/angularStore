import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import {
    DeleteUsers,
    DeleteUsersFailure,
    DeleteUsersSuccess,
    EditUser,
    EditUserSuccess,
    PostUsers,
  PostUsersFailure,
  PostUsersSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  selectUser,
} from './userState.actions';
import { User } from 'src/app/Model/User.model';
import { Store } from '@ngrx/store';
import { UserState } from './userState.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService, private store:Store<UserState>) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return this.userService.get().pipe(
          map((resp) => {
            return loadUsersSuccess({ data: resp });
          }),
          catchError((err) => of(loadUsersFailure({ error: err.message })))
        );
      })
    )
  );

  postUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostUsers),
      mergeMap(({user:newUser}) => {
        return this.userService.post(newUser).pipe(
          map((resp) => {
            return PostUsersSuccess({ user: resp as User });
          }),
          catchError((err) => of(PostUsersFailure({ error: err.message })))
        );
      })
    )
  );

  deleteUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteUsers),
      mergeMap(({id:userId}) => {
        return this.userService.delete(userId).pipe(
          map((resp) => {
            console.log("resp");
            console.log(resp);
            return DeleteUsersSuccess({ id: userId });
          }),
          catchError((err) => of(DeleteUsersFailure({ error: err.message })))
        );
      })
    )
  );

  editUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditUser),
      mergeMap(({user:User}) => {
        // this.store.dispatch(selectUser({user:User}))
        return this.userService.edit(User).pipe(
          map((resp) => {
            
            return EditUserSuccess({ user: User });
          }),
          catchError((err) => of(DeleteUsersFailure({ error: err.message })))
        );
      })
    )
  );
}
