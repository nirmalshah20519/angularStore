import { Injectable } from '@angular/core';
import { InputGeneric } from '../Model/InputGenric.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  form:any={}

  getForm(data:InputGeneric<string>[]){
    data.forEach(d=>{
      this.form[d.key]=d.required? new FormControl(d.value,[Validators.required]):new FormControl(d.value);
    });

    return new FormGroup(this.form)
  }
}
