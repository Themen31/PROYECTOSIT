package com.ferreteria.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "venta")
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombre", length = 60, nullable = false)
    private String nombre;

    @Column(name = "apellido", length = 60, nullable = false)
    private String apellido;

    @Column(name = "dni", length = 8, nullable = false)
    private String dni;

    @Column(name = "correo", length = 60, nullable = false)
    private String correo;

    @Column(name = "telefono", length = 9, nullable = false)
    private String telefono;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name="fecha", nullable = false, updatable = false)
    private LocalDate fecha;

    @Column(name="total", nullable = false)
    private Double total;

    @OneToMany( cascade = CascadeType.ALL, mappedBy = "venta", fetch = FetchType.LAZY)
    private List<Orden> items;

}
