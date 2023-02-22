package com.company.smoothie.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "nutrition")
public class Nutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @DecimalMin(value = "0.01", message = "Energy should not be less than 0")
    private BigDecimal energy;

    @DecimalMin(value = "0.01", message = "Protein should not be less than 0")
    @DecimalMax(value = "100.00", message = "Protein should not be greater than 100")
    private BigDecimal protein;

    @DecimalMin(value = "0.01", message = "Fat should not be less than 0")
    @DecimalMax(value = "100.00", message = "Fat should not be greater than 100")
    private BigDecimal fat;

    @DecimalMin(value = "0.01", message = "Carbohydrate should not be less than 0")
    @DecimalMax(value = "100.00", message = "Carbohydrate should not be greater than 100")
    private BigDecimal carbohydrate;
}
