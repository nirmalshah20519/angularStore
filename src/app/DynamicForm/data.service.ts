import { Injectable } from '@angular/core';
import { InputGeneric } from '../Model/InputGenric.model';
import { InputControlEmail, InputControlRadio, InputControlText } from '../Model/InputControl.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFormData(){
    const data:InputGeneric<string>[]=[
      new InputControlText({
        key:'name',
        label:'Enter Name',
        value:'',
        type:'text',
        required:true,
        order:1
      }),
      new InputControlEmail({
        key:'email',
        label:'Enter Email',
        value:'',
        type:'email',
        required:true,
        order:2
      }),
      new InputControlRadio({
        key:'gender',
        label:'Select gender',
        value:'',
        type:'radio',
        required:true,
        order:3,
        options:[
          {key:'male',value:'male'},
          {key:'female',value:'female'}
        ]
      }),
      new InputControlRadio({
        key:'status',
        label:'Select Status',
        value:'',
        type:'radio',
        required:true,
        order:4,
        options:[
          {key:'active',value:'active'},
          {key:'inactive',value:'inactive'}
        ]
      })
    ]

    return of(data.sort((a,b)=>a.order-b.order))
  }
}
