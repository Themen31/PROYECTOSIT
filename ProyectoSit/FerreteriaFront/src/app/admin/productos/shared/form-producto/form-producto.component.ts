import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SharedService} from '../shared.service';
import { Router } from '@angular/router';
import {Producto} from '../producto.model';
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit{

  form: FormGroup;
  categoria: any[] = ['Herramientas','Construccion','Taladros'];

  @Input() producto: Producto = new Producto();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private service: SharedService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      categoria: [this.producto.categoria, [Validators.required, Validators.minLength(3),
          Validators.maxLength(60)]],
      nombre: [this.producto.nombre, [Validators.required]],
      marca: [this.producto.marca, [Validators.required]],
      precio: [this.producto.precio, [Validators.required, Validators.min(1)]],
      stock: [this.producto.stock, [Validators.required, Validators.min(1)]],
    });
  }

  save(){
    this.onSubmit.emit(this.form.value),
    console.log(this.form.value);
  }

}
