import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//   private users:User[]=[
//     {
//         "id": 3391124,
//         "name": "Parvati Ganaka",
//         "email": "ganaka_parvati@wisoky.test",
//         "gender": "female",
//         "status": "active"
//     },
//     {
//         "id": 3391123,
//         "name": "Mukul Mishra",
//         "email": "mishra_mukul@jacobi.example",
//         "gender": "female",
//         "status": "active"
//     },
//     {
//         "id": 3391122,
//         "name": "Meghnad Ahuja",
//         "email": "meghnad_ahuja@effertz.example",
//         "gender": "male",
//         "status": "active"
//     },
//     {
//         "id": 3391121,
//         "name": "Kama Pothuvaal",
//         "email": "pothuvaal_kama@stiedemann.test",
//         "gender": "female",
//         "status": "inactive"
//     },
//     {
//         "id": 3391120,
//         "name": "Sweta Reddy",
//         "email": "reddy_sweta@dubuque.example",
//         "gender": "female",
//         "status": "active"
//     },
//     {
//         "id": 3391119,
//         "name": "Amb. Charak Dwivedi",
//         "email": "charak_amb_dwivedi@purdy-wisoky.example",
//         "gender": "female",
//         "status": "inactive"
//     },
//     {
//         "id": 3391118,
//         "name": "Agniprava Bandopadhyay",
//         "email": "bandopadhyay_agniprava@dickinson.example",
//         "gender": "female",
//         "status": "active"
//     },
//     {
//         "id": 3391116,
//         "name": "Kanishka Namboothiri JD",
//         "email": "kanishka_namboothiri_jd@williamson-feil.test",
//         "gender": "male",
//         "status": "active"
//     },
//     {
//         "id": 3391115,
//         "name": "Chandrakala Gowda",
//         "email": "gowda_chandrakala@mraz-ratke.test",
//         "gender": "female",
//         "status": "inactive"
//     },
//     {
//         "id": 3391114,
//         "name": "Siddarth Johar",
//         "email": "siddarth_johar@ritchie.test",
//         "gender": "female",
//         "status": "inactive"
//     }
// ]
  private URL="https://gorest.co.in/public/v2/users"
  private token="Bearer c7f17d6edaa2cbf9f9765a9698e25932aa3998211c55d171a4a32e909df94138"
  private header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.token,
  });
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<User[]>(this.URL,{headers:this.header})
  }

  post(u:User){
    return this.http.post(this.URL,u,{headers:this.header})
  }

  delete(id:number){
    return this.http.delete(this.URL+`/${id}`,{headers:this.header})
  }

  edit(user:User){
    return this.http.patch(this.URL+`/${user.id}`,user,{headers:this.header})
  }
  
}
