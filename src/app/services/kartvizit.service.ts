import { Kartvizit } from './../models/kartvizit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KartvizitService {

  apiUrl = "http://localhost:3000/kartvizits"

  constructor(private httpClient:HttpClient) { }

  getKartvizits():Observable<Kartvizit[]>{
    return this.httpClient.get<Kartvizit[]>(this.apiUrl);
  }

  add(kartvizit:Kartvizit):Observable<Kartvizit>{
    return this.httpClient.post<Kartvizit>(this.apiUrl,kartvizit);
  }
  delete(id:number):Observable<Kartvizit>{
    return this.httpClient.delete<Kartvizit>(this.apiUrl + "/" +id);
  }

}
