import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Producto} from '../shared/producto.model';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit{

  constructor(private service: SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  addProducto(producto:Producto){
    this.service.agregarProducto(producto).subscribe(() => {
      this.router.navigate(['/admin/productos'])
    }),
    (err:any) => {}
  }

}
