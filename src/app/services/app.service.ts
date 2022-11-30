import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  base_url="http://localhost:3000/"
  constructor( private http:HttpClient) { }

  getAllProducts():Observable<any>{
   const data= this.http.get(`${this.base_url}producuts`)
   return data;
  }
  deleteProduct(id:any):Observable<any>{
  return this.http.delete(`${this.base_url}producuts/${id}`)
  }
  createProduct(data:any):Observable<any> {
    return this.http.post<any>(`${this.base_url}producuts`,data,{ headers: { 'Content-Type' : 'application/json'} })
  }
  updateProduct(data:any,id:any):Observable<any> {
    return this.http.put<any>(`${this.base_url}producuts/${id}`,data,{ headers: { 'Content-Type' : 'application/json'} })
  }
}
