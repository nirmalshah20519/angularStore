import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./userState.model";
import { initialState } from "./userState.reducer";

const data = createFeatureSelector<UserState>('user')

export const selectAllUsers = createSelector(data, (state) => state.Users);
export const selectSelectedUser = createSelector(data, (state) => state.SelectedUser);