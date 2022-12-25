import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from '../shared/shared.service'
import {Title} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-venta',
  templateUrl: './new-venta.component.html',
  styleUrls: ['./new-venta.component.css']
})
export class NewVentaComponent implements OnInit{

  constructor(private service: SharedService,
              private router: Router, private titulo: Title) {
    titulo.setTitle("Nueva Venta")
  }

  ngOnInit(): void {
  }

  create(venta: any){

    this.service.agregarVenta(venta).subscribe((res) => {
        Swal.fire(
          'Venta hecha correctamente',
          'Guardado correctamente!!',
          'success'
        )
        this.router.navigate(['/admin/ventas']);
    },
    (err) => {
      console.log(err);
    }
   );
  }
}
