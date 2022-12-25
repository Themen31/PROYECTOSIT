package com.ferreteria.validators;

import com.ferreteria.exception.IncorrectResourceRequestException;
import com.ferreteria.model.Orden;
import com.ferreteria.model.Producto;

public class ProductoValidator {

    public static void validate(Producto producto){

        if(producto.getNombre()==null || producto.getNombre().isEmpty()){
            throw new IncorrectResourceRequestException("producto is null");
        }

        if(producto.getMarca()==null || producto.getMarca().isEmpty()){
            throw new IncorrectResourceRequestException("marca is null");
        }

        if(producto.getCategoria()==null || producto.getCategoria().isEmpty()){
            throw new IncorrectResourceRequestException("categoria is null");
        }

        if(producto.getPrecio()==null){
            throw new IncorrectResourceRequestException("precio is null");
        }

    }

}
