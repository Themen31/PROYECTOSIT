package com.ferreteria.validators;

import com.ferreteria.exception.IncorrectResourceRequestException;
import com.ferreteria.model.Orden;
import com.ferreteria.model.Venta;

public class VentaValidator {

    public static void validate(Venta venta){
        if(venta.getItems()==null || venta.getItems().isEmpty()){
            throw new IncorrectResourceRequestException("item is null");
        }

        for(Orden line: venta.getItems()){
            if(line.getProducto()==null || line.getProducto().getId()==null){
                throw new IncorrectResourceRequestException("producto is null");
            }
            if(line.getQuantity()<=0){
                throw new IncorrectResourceRequestException("cantidad 0");
            }
        }
    }

}
