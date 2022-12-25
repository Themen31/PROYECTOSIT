import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../shared/producto.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent {

  private id: number;
  form: FormGroup;

  categoria: any[] = ['Herramientas','Construccion','Taladros'];

  constructor(public service: SharedService,
    private router:Router, public activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.id = Number(paramMap.get('id'));
        console.log(this.id);
     });
  
     this.form = new FormGroup({
      categoria: new FormControl(),
      nombre: new FormControl(),
      marca: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
    });
    }
  
  
    save(){
      let producto = new Producto;
      producto.id = this.id;
      producto.categoria = this.form.value['categoria'];
      producto.nombre = this.form.value['nombre'];
      producto.marca = this.form.value['marca'];
      producto.precio = this.form.value['precio'];
      producto.stock = this.form.value['stock'];
      this.service.updateProducto(producto).subscribe(() => {
        this.router.navigate(['/admin/productos']);
      }, (err: any) =>{})
    }

}
