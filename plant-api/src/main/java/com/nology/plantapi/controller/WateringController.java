package com.nology.plantapi.controller;

import com.nology.plantapi.entities.WateringEntity;
import com.nology.plantapi.models.PlantViewObject;
import com.nology.plantapi.services.PlantService;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class WateringController {

    @NonNull private PlantService plantService;

    @Transactional
    @PostMapping("/watering")
    public ResponseEntity<String> createWater(@RequestBody WateringEntity water){
        plantService.addWater(water);
        return ResponseEntity.status(HttpStatus.CREATED).body("saved");
    }



}
