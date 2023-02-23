package com.company.smoothie.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "smoothie")
public class Smoothie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank(message = "Name should not be an empty")
    @Size(max = 100, message = "Name size should not be greater than 100")
    private String name;

    @NotBlank(message = "Ingredients should not be an empty")
    private String ingredients;

    private boolean isArchived;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nutrition_id", referencedColumnName = "id")
    @NotNull(message = "Nutrition should not be null")
    private Nutrition nutrition;
}
