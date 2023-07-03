import { User } from "src/app/Model/User.model";

export interface UserState{
    Users:User[],
    SelectedUser?:User,
    error:any
    
}