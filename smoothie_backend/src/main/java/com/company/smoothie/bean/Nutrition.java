package com.company.smoothie.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Data;

@Data
@Entity
@Table(name = "nutrition")
public class Nutrition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Min(value = 0, message = "Energy should not be less than 0")
    private double energy;

    @Min(value = 0, message = "Protein should not be less than 0")
    @Max(value = 100, message = "Protein should not be greater than 100")
    private double protein;

    @Min(value = 0, message = "Fat should not be less than 0")
    @Max(value = 100, message = "Fat should not be greater than 100")
    private double fat;

    @Min(value = 0, message = "Carbohydrate should not be less than 0")
    @Max(value = 100, message = "Carbohydrate should not be greater than 100")
    private double carbohydrate;

}
