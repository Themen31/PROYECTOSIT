package com.ferreteria.service.impl;

import com.ferreteria.exception.ResourceNotFoundException;
import com.ferreteria.model.Orden;
import com.ferreteria.model.Producto;
import com.ferreteria.model.Venta;
import com.ferreteria.repositories.ProductoRepository;
import com.ferreteria.repositories.VentaRepository;
import com.ferreteria.service.VentaService;
import com.ferreteria.validators.VentaValidator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class VentaServiceImpl implements VentaService {

    private final VentaRepository ventaRepository;
    private final ProductoRepository productoRepository;

    public VentaServiceImpl(VentaRepository ventaRepository, ProductoRepository productoRepository) {
        this.ventaRepository = ventaRepository;
        this.productoRepository = productoRepository;
    }

    @Override
    @Transactional
    public Venta registrarVenta(Venta venta) {

        VentaValidator.validate(venta);
        double total=0;
        int restaStock = 0;
        for(Orden item:venta.getItems()){
            Producto producto = productoRepository.findById(item.getProducto().getId())
                    .orElseThrow(()->new ResourceNotFoundException("No existe el producto "+item.getProducto().getId()));

            item.setPrice(producto.getPrecio());
            item.setTotal(producto.getPrecio()*item.getQuantity());
            restaStock = producto.getStock() - item.getQuantity();
            producto.setStock(restaStock);
            total+= item.getTotal();
        }
        venta.setTotal(total);
        venta.getItems().forEach(line->line.setVenta(venta));
        venta.setFecha(LocalDate.now());
        return ventaRepository.save(venta);

    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> listarVentas() {
        return ventaRepository.findAll();
    }

    @Override
    @Transactional
    public Venta obtenerVentaPorId(Long id) {
        Optional<Venta> venta = ventaRepository.findById(id);
        return venta.orElseThrow(() -> new ResourceNotFoundException("Venta no found"));
    }

    @Override
    @Transactional
    public void eliminarVenta(Long id) {
        ventaRepository.deleteById(id);
    }
}
