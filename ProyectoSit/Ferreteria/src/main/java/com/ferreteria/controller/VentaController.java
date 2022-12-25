package com.ferreteria.controller;

import com.ferreteria.model.Venta;
import com.ferreteria.service.impl.VentaServiceImpl;
import com.ferreteria.utils.WrapperResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venta")
@CrossOrigin(origins = "*")
public class VentaController {

    private final VentaServiceImpl ventaService;

    public VentaController(VentaServiceImpl ventaService) {
        this.ventaService = ventaService;
    }

    @PostMapping
    public ResponseEntity<WrapperResponse<Venta>> agregarReserva(@RequestBody Venta venta){
        Venta newVenta = ventaService.registrarVenta(venta);
        return new WrapperResponse<>(true,"success",newVenta).createResponse();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarVenta(@PathVariable ("id")Long id) {
        ventaService.eliminarVenta(id);
        return new ResponseEntity<String>("Venta eliminada", HttpStatus.OK);
    }

    @GetMapping("/listar")
    public List<Venta> listarReservas(){
        return ventaService.listarVentas();
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<WrapperResponse<Venta>> obtenerReservaPorId(@PathVariable("id") Long id){
        Venta venta = ventaService.obtenerVentaPorId(id);
        return new WrapperResponse<>(true, "success", venta).createResponse(HttpStatus.OK);
    }

}
