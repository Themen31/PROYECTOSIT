package com.ferreteria.service;

import com.ferreteria.model.Producto;

import java.util.List;

public interface ProductoService {
    Producto registrarProducto(Producto producto);
    Producto modificarProducto (Producto producto);
    List<Producto> listarProductos();
    Producto obtenerProductoPorId(Integer id);
    void eliminarProducto(Integer id);
}
