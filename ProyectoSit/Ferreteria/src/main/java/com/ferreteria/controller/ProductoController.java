package com.ferreteria.controller;


import com.ferreteria.model.Producto;
import com.ferreteria.service.ProductoService;
import com.ferreteria.utils.WrapperResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "*")
public class ProductoController {
    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping("")
    public ResponseEntity<WrapperResponse<List<Producto>>> listarProducto() {
        List<Producto> producto = productoService.listarProductos();
        return new WrapperResponse<>(true, "success", producto).createResponse(HttpStatus.OK);
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<WrapperResponse<Producto>> obtenerPlatoPorId(@PathVariable("id") Integer id){
        Producto producto = productoService.obtenerProductoPorId(id);
        return new WrapperResponse<>(true, "success", producto).createResponse(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Producto>> registrarMascota(@RequestBody Producto producto) {
        Producto productoNew = productoService.registrarProducto(producto);
        return new WrapperResponse<Producto>(true, "success", productoNew).createResponse(HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<Producto> modificarMascota(@RequestBody Producto producto) {
        Producto productoUpdate = productoService.modificarProducto(producto);
        return new ResponseEntity<Producto>(productoUpdate, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable ("id")Integer id) {
        productoService.eliminarProducto(id);
        return new ResponseEntity<String>("Producto eliminado", HttpStatus.OK);
    }
}

