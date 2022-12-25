import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Venta} from "../shared/model/venta.model";
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
    private url = environment.apiBase;

  agregarVenta(venta:Venta){
    return this.http.post(`${this.url}/venta`,venta);
  }
 
 listarVenta(){
   return this.http.get<Venta[]>(`${this.url}/venta/listar`);
 }

 eliminarVenta(id:number):Observable<any>{
    return this.http.delete(`${this.url}/venta/${id}`);
 }

 
 buscarPorId(id: number){
   return this.http.get(`${this.url}/venta/listar/${id}`);
 }

}
