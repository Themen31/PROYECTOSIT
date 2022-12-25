import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../shared/producto.model";
import {environment} from "../../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  private url = environment.apiBase;

  agregarProducto(producto:Producto){
    return this.http.post(`${this.url}/producto`,producto);
  }

  listarProductos(){
   return this.http.get<Producto[]>(`${this.url}/producto`);
  }
  
  updateProducto(producto: Producto){
   return this.http.put(`${this.url}/producto`, producto);
  }

  deleteProducto(id: number){
   return this.http.delete(`${this.url}/producto/${id}`)
  }

  obtenerProductoPorId(id: number){
    return this.http.get(`${this.url}/producto/listar/${id}`);
  }

}
