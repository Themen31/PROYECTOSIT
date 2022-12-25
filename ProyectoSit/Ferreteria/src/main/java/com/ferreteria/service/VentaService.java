package com.ferreteria.service;

import com.ferreteria.model.Venta;

import java.util.List;

public interface VentaService {

    Venta registrarVenta(Venta venta);
    List<Venta> listarVentas();
    Venta obtenerVentaPorId(Long id);
    void eliminarVenta(Long id);

}
