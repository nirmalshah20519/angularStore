import { createAction, props } from "@ngrx/store";
import { User } from "src/app/Model/User.model";

export const selectUser = createAction('[User] select user', props<{user:User}>())
export const deSelectUser = createAction('[User] deselect user')

export const loadUsers = createAction('[Users] loadUsers')
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ data: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const PostUsers = createAction('[Users] PostUsers', props<{ user: User }>())
export const PostUsersSuccess = createAction('[User] Post Users Success', props<{ user: User }>());
export const PostUsersFailure = createAction('[User] Post Users Failure', props<{ error: string }>());

export const DeleteUsers = createAction('[Users] DeleteUsers', props<{ id:number }>())
export const DeleteUsersSuccess = createAction('[User] Delete Users Success', props<{ id:number }>());
export const DeleteUsersFailure = createAction('[User] Delete Users Failure', props<{ error: string }>());

export const EditUser = createAction('[Users] EditUsers', props<{ user:User }>())
export const EditUserSuccess = createAction('[User] Edit Users Success', props<{ user:User }>());
export const EditUserFailure = createAction('[User] Edit Users Failure', props<{ error: string }>());