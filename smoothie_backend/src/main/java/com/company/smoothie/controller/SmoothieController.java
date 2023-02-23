package com.company.smoothie.controller;

import com.company.smoothie.entity.Smoothie;
import com.company.smoothie.service.SmoothieService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/smoothies")
public class SmoothieController {
    private final SmoothieService smoothieService;

    @Autowired
    public SmoothieController(SmoothieService smoothieService) {
        this.smoothieService = smoothieService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Smoothie> getSmoothies() {
        return this.smoothieService.getSmoothies();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSmoothie(@PathVariable Long id) {
        return this.smoothieService.getSmoothie(id).map(ResponseEntity::ok).orElse(ResponseEntity.badRequest().build());
    }

    @RolesAllowed("OWNER")
    @PostMapping
    public ResponseEntity<?> saveOrUpdateSmoothie(@Valid @RequestBody Smoothie smoothie) {
        Smoothie newSmoothie = smoothieService.saveOrUpdateSmoothie(smoothie);
        if (Objects.isNull(smoothie.getId())) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newSmoothie);
        }
        return ResponseEntity.ok(newSmoothie);
    }

    @RolesAllowed("OWNER")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteSmoothie(@PathVariable Long id) {
        smoothieService.deleteSmoothie(id);
    }

}
