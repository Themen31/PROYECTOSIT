package com.ferreteria.model;



import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
@Entity
@Table(name ="producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @Size(min= 3, message = "Nombre debe tener mas de 3 caracteres")
    @Column(name = "nombre", nullable = false, length = 70 )
    private String nombre;

    @NotNull
    @Size(min = 4, message = "Marca debe tener mas de 4 caracteres")
    @Column(name = "marca", nullable = false, length = 20)
    private String marca;

    @NotNull
    @Size(min = 3,  message = " Categoria debe tener mas de 3 caracteres")
    @Column(name = "categoria", nullable = false, length = 20)
    private String categoria;

    @NotNull
    @Column(name = "precio", nullable = false)
    private Double precio;

    @NotNull
    @Column(name = "stock", nullable = false)
    private Integer stock;

}

