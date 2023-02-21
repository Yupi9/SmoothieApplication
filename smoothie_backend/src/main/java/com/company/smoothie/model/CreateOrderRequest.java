package com.company.smoothie.model;

import lombok.Data;

import java.util.List;

@Data
public class CreateOrderRequest {

    private String customerName;
    private String customerPhoneNumber;

    private List<Item> items;

    @Data
    public static class Item {
        private Long smoothieId;
        private Integer quantity;
    }
}
