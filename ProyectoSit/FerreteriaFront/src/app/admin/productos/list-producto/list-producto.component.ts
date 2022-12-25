import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Producto} from '../shared/producto.model';
import {SharedService} from '../shared/shared.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit{

  public productos: Array<Producto> = [];
  displayedColumns: string[] = ['id','nombre','marca','categoria', 'precio', 'stock','acciones'];
  dataSource: MatTableDataSource<Producto>;

  constructor(private service: SharedService, private router:Router, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.service.listarProductos().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar el producto?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.service.deleteProducto(id).subscribe(()=>{
          this.getProductos();
        })
        Swal.fire(
          'Eliminado!',
          'Eliminaste el producto.',
          'success'
        ).then(okay =>{
          if(okay){
            window.location.reload();
          }
        })
      }
    })
  }

}
