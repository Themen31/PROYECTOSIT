import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { EditCitaComponent } from './citas/edit-cita/edit-cita.component';
import { NewCitaComponent } from './citas/new-cita/new-cita.component';
import { CitaListComponent } from './citas/cita-list/cita-list.component';
import {ListProdVentaComponent} from './ventas/list-prod-venta/list-prod-venta.component';
import {ListVentaComponent} from './ventas/list-venta/list-venta.component';
import {NewVentaComponent} from './ventas/new-venta/new-venta.component';
import { ListProductoComponent } from "../admin/productos/list-producto/list-producto.component";
import { EditProductoComponent } from "../admin/productos/edit-producto/edit-producto.component"
import { NewProductoComponent } from "../admin/productos/new-producto/new-producto.component"

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'productos',
        component: ListProductoComponent,
      },
      {
        path: 'productos/new',
        component: NewProductoComponent,
      },
      {
        path: 'productos/:id/editar',
        component: EditProductoComponent,
      },
      {
        path: 'ventas',
        component: ListVentaComponent,
      },
      {
        path: 'ventas/:id/detalle',
        component: ListProdVentaComponent,
      },
      {
        path: 'ventas/new',
        component: NewVentaComponent,
      },
      {
        path: 'Usuarios',
        component: CitaListComponent,
      },
      {
        path: 'Usuarios/new',
        component: NewCitaComponent,
      },
      {
        path: 'Usuarios/:id/editar',
        component: EditCitaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
