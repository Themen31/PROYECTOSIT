import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { SharedService as servicePr } from "../../../productos/shared/shared.service";
import { SharedService as serviceVn} from "../shared.service";
import { Producto } from "../../../productos/shared/producto.model";
import { VentaItem } from "../model/venta-item.model";
import { Venta } from "../model/venta.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit{

  form: FormGroup;
  productos: Producto[];
  quantity: number;

  cantidad: any[] = [1,2,3,4,5,6,7,8];

  orderLines: VentaItem[] = [];

  myControlProducto = new FormControl();
  platosFiltrados$: Observable<Producto[]>;

  @Input() rs: Venta = new Venta();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(private servicev: serviceVn,
              private servicep: servicePr,
              private location:Location) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      correo: new FormControl(),
      telefono: new FormControl(),
      producto: this.myControlProducto,
      quantity: new FormControl(),
    });

    this.listarProductos();

    this.platosFiltrados$ = this.myControlProducto.valueChanges.pipe(
      map((val) => this.filtrarProductos(val))
    );
  }

  listarProductos() {
    this.servicep.listarProductos().subscribe((data: any) => {
      this.productos = data['body'];
    });
  }

  filtrarProductos(val: any) {
    if (val != null && val.id > 0) {
      return this.productos.filter((el) =>
        el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
      );
    }

    return this.productos.filter((el) =>
      el.nombre.toLowerCase().includes(val?.toLowerCase())
    );
  }

  mostrarProducto(val: Producto) {
    return val ? `${val.nombre}` : val;
  }

  agregarProducto() {
    if (this.form.value['producto']) {
      let orderLine = new VentaItem();
      orderLine.producto = this.form.value['producto'];
      orderLine.quantity = this.form.value['quantity'];

      this.orderLines.push(orderLine);
    }
  }

  removerProducto(index: number) {
    this.orderLines.splice(index, 1);
  }
  save() {
    let venta = new Venta();
    venta.nombre = this.form.value['nombre'];
    venta.apellido = this.form.value['apellido'];
    venta.dni = this.form.value['dni'];
    venta.correo = this.form.value['correo'];
    venta.telefono = this.form.value['telefono'];
    venta.items = this.orderLines;
    //console.log(fechaOb);
    this.onSave.emit(venta);
  }
  back():void{
    this.location.back();
  }

}
