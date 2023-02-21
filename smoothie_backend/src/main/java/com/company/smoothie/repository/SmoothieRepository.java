package com.company.smoothie.repository;

import com.company.smoothie.bean.Smoothie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SmoothieRepository extends CrudRepository<Smoothie, Long> {

    List<Smoothie> findAll();

    Optional<Smoothie> findByName(String name);
}
