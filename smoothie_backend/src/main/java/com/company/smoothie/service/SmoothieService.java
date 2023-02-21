package com.company.smoothie.service;

import com.company.smoothie.bean.Smoothie;
import com.company.smoothie.exception.DuplicateNameException;
import com.company.smoothie.repository.SmoothieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class SmoothieService {

    private final SmoothieRepository smoothieRepository;

    @Autowired
    public SmoothieService(SmoothieRepository smoothieRepository) {
        this.smoothieRepository = smoothieRepository;
    }

    public List<Smoothie> getSmoothies() {
        return smoothieRepository.findAll();
    }

    public Optional<Smoothie> getSmoothie(Long id) {
        return smoothieRepository.findById(id);
    }

    public void deleteSmoothie(Long id) {
        smoothieRepository.deleteById(id);
    }

    public Smoothie saveOrUpdateSmoothie(Smoothie smoothie) {
        String name = smoothie.getName();
        smoothieRepository.findByName(name).ifPresent(smoothieOld -> {
            if (Objects.isNull(smoothie.getId()) || !smoothieOld.getId().equals(smoothie.getId())) {
                throw new DuplicateNameException("Duplicate smoothie name!");
            }
        });
        return smoothieRepository.save(smoothie);
    }
}
