package com.company.smoothie.repository;

import com.company.smoothie.bean.Order;
import com.company.smoothie.bean.OrderStatus;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findAll();

    @Modifying
    @Query("UPDATE Order ord set ord.status = ?1 where ord.id = ?2")
    int updateStatus(OrderStatus status, Long id);
}
