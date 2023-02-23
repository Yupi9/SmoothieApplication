package com.company.smoothie.controller;

import com.company.smoothie.dto.ChangeOrderStatusRequest;
import com.company.smoothie.dto.CreateOrderRequest;
import com.company.smoothie.entity.Order;
import com.company.smoothie.service.OrderService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @RolesAllowed("OWNER")
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Order> getOrders() {
        return orderService.getOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        return this.orderService.getOrder(id).map(ResponseEntity::ok).orElse(ResponseEntity.badRequest().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order createOrder(@Valid @RequestBody CreateOrderRequest request) {
        return this.orderService.createOrder(request);
    }

    @RolesAllowed("OWNER")
    @PostMapping("/status")
    public ResponseEntity<?> updateOrderStatus(@Valid @RequestBody ChangeOrderStatusRequest request) {
        int count = this.orderService.updateStatus(request.getStatus(), request.getOrderId());
        if (count == 1) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
