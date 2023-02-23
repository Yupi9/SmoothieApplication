package com.company.smoothie.dto;

import com.company.smoothie.entity.OrderStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ChangeOrderStatusRequest {

    @NotNull(message = "Order Id should not be null")
    private Long orderId;

    @NotNull(message = "Order status should not be null")
    private OrderStatus status;
}
