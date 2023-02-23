package com.company.smoothie.dto;

import com.company.smoothie.entity.OrderStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Data
public class CreateOrderRequest {

    @NotBlank(message = "Customer name should not be an empty")
    @Size(max = 50, message = "Customer name size should not be greater than 50")
    private String customerName;

    @NotBlank(message = "Customer phone number should not be an empty")
    @Pattern(regexp = "[\\+\\d]{7,15}", message = "Customer phone number should contains only numbers and +")
    private String customerPhoneNumber;

    @NotEmpty(message = "Items should not be an empty")
    private List<Item> items;

    private OrderStatus status;

    @Data
    public static class Item {

        @NotNull(message = "Smoothie Id should not be null")
        private Long smoothieId;

        @Min(value = 1, message = "Quantity should not be less than 0")
        private Integer quantity;
    }
}
