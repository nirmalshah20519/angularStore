import { createReducer, on } from "@ngrx/store";
import { UserState } from "./userState.model";
import { DeleteUsers, DeleteUsersFailure, DeleteUsersSuccess, EditUserFailure, EditUserSuccess, PostUsers, PostUsersFailure, PostUsersSuccess, deSelectUser, loadUsers, loadUsersFailure, loadUsersSuccess, selectUser } from "./userState.actions";
import { state } from "@angular/animations";

export const initialState:UserState={
    Users:[],
    error:null
}

export const userReducer = createReducer(
    initialState,
    on(selectUser, (state, {user:Usr})=>{
        return ({...state, SelectedUser:Usr})
    }),
    on(deSelectUser, (state)=>{
        return ({...state, SelectedUser:undefined})
    }),
    on(loadUsersSuccess, (state, { data }) => ({ ...state, Users:data })),
    on(loadUsersFailure, (state, { error }) => ({ ...state, error })),

    on(PostUsersSuccess, (state, { user:newUser }) => ({ ...state, Users:[newUser,...state.Users].sort((a,b)=>a.id!-b.id!)})),
    on(PostUsersFailure, (state, { error }) => ({ ...state, error })),

    on(DeleteUsersSuccess, (state, { id:deletedUserID }) =>{
        let updatedList = state.Users.filter(u=>u.id!==deletedUserID);
        return ({...state, Users:updatedList.sort((a,b)=>a.id!-b.id!)})
    }),
    on(DeleteUsersFailure, (state, { error }) => ({ ...state, error })),

    on(EditUserSuccess, (state, { user:updatedData }) =>{
        
        return ({...state, Users:[...state.Users.map(u=>u.id===updatedData.id?updatedData:u)]})
    }),
    on(EditUserFailure, (state, { error }) => ({ ...state, error })),
);