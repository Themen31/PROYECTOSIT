import {Producto} from '../../../productos/shared/producto.model'

export class VentaItem{
    id: number;
    price: number;
    quantity: number;
    total: number;
    producto: Producto;
}