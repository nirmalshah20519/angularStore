import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../DynamicForm/data.service';
import { GroupService } from '../DynamicForm/group.service';
import { FormGroup } from '@angular/forms';
import { InputGeneric } from '../Model/InputGenric.model';
import { Store } from '@ngrx/store';
import { UserState } from 'src/ngStore/userState.model';
import { EditUser, PostUsers, deSelectUser, selectUser } from 'src/ngStore/userState.actions';
import { User } from '../Model/User.model';
import { Observable, map } from 'rxjs';
import { async } from '@angular/core/testing';
import { selectSelectedUser } from 'src/ngStore/userState.selector';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  @Input() form!:FormGroup;
  @Input() data!:InputGeneric<string>[];
  @Output() patchForm=new EventEmitter();
  sUser$=this.store.select(selectSelectedUser)

  constructor( private store:Store<UserState>){
    
  }

  onSubmit(){
    const newUser = this.form.value
    console.log(newUser);
    this.store.dispatch(PostUsers({user:newUser}))
    this.store.dispatch(deSelectUser())
    this.form.reset()
    this.patchForm.emit()
  }

  onUpdate(){
    let newUser:User = this.form.value
    this.sUser$.subscribe({
      next:(resp:User|undefined)=>{
        if(resp){
          console.log(newUser);
          const usr ={...newUser, id:resp.id}
          console.log(usr);
          this.store.dispatch(EditUser({user:usr}))
        }
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
    this.store.dispatch(deSelectUser())
    this.form.reset()
    this.patchForm.emit()
    
    
  }
}
