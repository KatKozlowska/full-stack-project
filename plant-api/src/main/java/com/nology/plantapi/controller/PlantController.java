package com.nology.plantapi.controller;

import com.nology.plantapi.entities.PlantEntity;
import com.nology.plantapi.repository.PlantRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PlantController {

    @NonNull private PlantRepository plantRepository; // eventually swap to a service

    @GetMapping("/plants")
    public ResponseEntity<List<PlantEntity>> getPlants() {
        return ResponseEntity.ok(plantRepository.findAll());
    }

}
