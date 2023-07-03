import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'src/ngStore/userState.model';
import { selectSelectedUser } from 'src/ngStore/userState.selector';
import { User } from './Model/User.model';
import { selectUser } from 'src/ngStore/userState.actions';
import { DataService } from './DynamicForm/data.service';
import { GroupService } from './DynamicForm/group.service';
import { InputGeneric } from './Model/InputGenric.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynStore';
  patchUser!:User
  form!:FormGroup
  data:InputGeneric<string>[]=[]
  constructor(private dataServ:DataService, private groupServ:GroupService, private store:Store<UserState>)
  {
    dataServ.getFormData().subscribe({
      next:(data:InputGeneric<string>[])=>{
        this.data=data;
        this.form=groupServ.getForm(this.data);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

 handlePatch(flag:number|undefined){
  this.store.select(selectSelectedUser).subscribe({
    next:(resp:User|undefined)=>{
      if(resp){
        // let {id, ...data} = resp
        this.patchUser=resp;
        this.form.patchValue(resp)
      }
      else{
        this.form.reset()
      }
    },
    error:(err:any)=>{
      console.log(err);
    }
  })
 }
 

}
