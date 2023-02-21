package com.company.smoothie.service;

import com.company.smoothie.bean.Order;
import com.company.smoothie.bean.OrderItem;
import com.company.smoothie.bean.OrderStatus;
import com.company.smoothie.bean.Smoothie;
import com.company.smoothie.exception.SmoothieNotFoundException;
import com.company.smoothie.model.CreateOrderRequest;
import com.company.smoothie.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final SmoothieService smoothieService;

    public OrderService(OrderRepository orderRepository, SmoothieService smoothieService) {
        this.orderRepository = orderRepository;
        this.smoothieService = smoothieService;
    }

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrder(Long id) {
        return orderRepository.findById(id);
    }

    @Transactional
    public int updateStatus(OrderStatus status, Long id) {
        return orderRepository.updateStatus(status, id);
    }

    public Order createOrder(CreateOrderRequest request) {
        Order order = Order.builder()
                .customerName(request.getCustomerName())
                .customerPhoneNumber(request.getCustomerPhoneNumber())
                .status(OrderStatus.NEW)
                .build();
        List<OrderItem> orderItems = request.getItems().stream().map(item -> {
            Smoothie smoothie = smoothieService.getSmoothie(item.getSmoothieId())
                    .orElseThrow(SmoothieNotFoundException::new);
            return OrderItem.builder()
                    .order(order)
                    .smoothie(smoothie)
                    .quantity(item.getQuantity())
                    .build();
        }).collect(Collectors.toList());
        order.setOrderItems(orderItems);
        return orderRepository.save(order);
    }
}
