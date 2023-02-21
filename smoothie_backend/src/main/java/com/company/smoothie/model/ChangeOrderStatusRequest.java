package com.company.smoothie.model;

import com.company.smoothie.bean.OrderStatus;
import lombok.Data;

@Data
public class ChangeOrderStatusRequest {
    private Long orderId;
    private OrderStatus status;
}
