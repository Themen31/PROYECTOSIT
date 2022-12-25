import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../shared/shared.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Venta } from '../shared/model/venta.model';
import {Location} from "@angular/common";

@Component({
  selector: 'app-list-prod-venta',
  templateUrl: './list-prod-venta.component.html',
  styleUrls: ['./list-prod-venta.component.css']
})
export class ListProdVentaComponent implements OnInit{

  public lista: string[];
  private id:number;
  dataSource: MatTableDataSource<string>;
  displayedColumns: string[] = ['id','categoria','nombre', 'marca','precio', 'cantidad', 'total'];

  constructor(private location:Location,public service: SharedService ,private activeRoute:ActivatedRoute,private _snackBar: MatSnackBar,private fb:FormBuilder, private _snackbar:MatSnackBar,private router:Router) {

    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.service.buscarPorId(this.id).subscribe((data:any)=>{
        this.lista = data?.body.items;
        this.dataSource = new MatTableDataSource(this.lista);
        console.log(this.lista);
      });
   })
  }

  ngOnInit(): void {

  }

  back():void{
    this.location.back();
  }

}
