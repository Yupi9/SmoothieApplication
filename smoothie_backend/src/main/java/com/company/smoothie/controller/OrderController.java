package com.company.smoothie.controller;

import com.company.smoothie.bean.Order;
import com.company.smoothie.exception.SmoothieNotFoundException;
import com.company.smoothie.model.ChangeOrderStatusRequest;
import com.company.smoothie.model.CreateOrderRequest;
import com.company.smoothie.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getOrders() {
        return ResponseEntity.ok(orderService.getOrders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        return this.orderService.getOrder(id).map(ResponseEntity::ok).orElse(ResponseEntity.badRequest().build());
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody CreateOrderRequest request) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(this.orderService.createOrder(request));
        } catch (SmoothieNotFoundException e) {
            return ResponseEntity.badRequest().body("Smoothie not found!");
        }
    }

    @PostMapping("/status")
    public ResponseEntity<?> updateOrderStatus(@RequestBody ChangeOrderStatusRequest request) {
        int count = this.orderService.updateStatus(request.getStatus(), request.getOrderId());
        if (count == 1) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
