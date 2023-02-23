package com.company.smoothie.repository;

import com.company.smoothie.entity.OrderStatus;
import com.company.smoothie.entity.Smoothie;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SmoothieRepository extends CrudRepository<Smoothie, Long> {

    List<Smoothie> findByIsArchivedFalse();

    Optional<Smoothie> findByName(String name);

    @Modifying
    @Query("UPDATE Smoothie sm set sm.isArchived = true where sm.id = ?1")
    int archiveSmoothie(Long id);
}
