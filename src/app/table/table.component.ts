import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';
import { UserState } from 'src/ngStore/userState.model';
import { Store } from '@ngrx/store';
import { DeleteUsers, loadUsers, selectUser } from 'src/ngStore/userState.actions';
import { selectAllUsers } from 'src/ngStore/userState.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Output() patchForm=new EventEmitter()
  user$=this.store.select(selectAllUsers)
  constructor(private store:Store<UserState>){
    
    store.dispatch(loadUsers())
  }

  onDelete(id:number|undefined){
    if(id){
      console.log(id);
      this.store.dispatch(DeleteUsers({id:id}))
    }
    else{
      console.log("User Not Found");
    }
  }

  onEdit(user:User){
    this.store.dispatch(selectUser({user:user}))
    this.patchForm.emit()
  }

}
