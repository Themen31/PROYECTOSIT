import {VentaItem} from "./venta-item.model"

export class Venta {

  id:number;
  nombre:string;
  apellido:string;
  dni:string;
  correo:string;
  telefono: string;
  items: VentaItem[];

}