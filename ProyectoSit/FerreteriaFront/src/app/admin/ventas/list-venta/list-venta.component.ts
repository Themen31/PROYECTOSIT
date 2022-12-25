import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SharedService} from "../shared/shared.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {MatDialog,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Venta} from "../shared/model/venta.model";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit{

  public ventas: Array<Venta> = [];
  displayedColumns: string[] = ['id','nombre','apellido','dni', 'correo','telefono', 'fecha', 'total', 'acciones'];
  dataSource: MatTableDataSource<Venta>;

  constructor(private service: SharedService, private router:Router, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas() {
    this.service.listarVenta().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id:number){
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar la venta?',
      text: "La acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.service.eliminarVenta(id).subscribe(()=>{
          this.getVentas();
        })
        Swal.fire(
          'Eliminado!',
          'Eliminaste la venta.',
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
