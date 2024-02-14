package com.nology.plantapi.controller;

import com.nology.plantapi.entities.WateringEntity;
import com.nology.plantapi.models.PlantViewObject;
import com.nology.plantapi.services.PlantService;
import com.nology.plantapi.entities.PlantEntity;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PlantController {

    @NonNull private PlantService plantService;

    @PostMapping("/plant")
    @Transactional
    public ResponseEntity<PlantEntity> createPlant(@RequestBody PlantEntity plant){
        plantService.addPlant(plant);
        return ResponseEntity.status(HttpStatus.CREATED).body(plant);
    }

    @GetMapping("/plants")
    public ResponseEntity<List<PlantViewObject>> getPlants(@RequestParam Optional<LocalDate> nextWater) {
        return ResponseEntity.ok(plantService.getAllPlants(nextWater));
    }

    @GetMapping("plants/thisWeek")
    public ResponseEntity<List<PlantViewObject>> getPlantsToWaterNextWeek() {
        return ResponseEntity.ok(plantService.getPlantsToWaterThisWeek());
    }

    @GetMapping("plants/{id}")
    public ResponseEntity<PlantViewObject> getPlantById(@PathVariable long id) {
        return ResponseEntity.ok(plantService.getPlantById(id));
    }

    // will return a watering history when called
    @GetMapping("/plants/{id}/watering")
    public ResponseEntity<List<WateringEntity>> getWateringByPlantId(@PathVariable long id) {
            return ResponseEntity.ok(plantService.getWateringEntities(id));
    }


    @PutMapping("/plant/{id}")
    @Transactional
    public ResponseEntity<PlantEntity> updatePlant(@RequestBody PlantEntity newPlant, @PathVariable long id){
        newPlant.setId(id);
        plantService.updatePlant(newPlant,id);
        return ResponseEntity.status(HttpStatus.OK).body(newPlant);
    }



    @DeleteMapping("plant/{id}")
    @Transactional

    public ResponseEntity<Void> deletePlantById(@PathVariable long id) {
      plantService.deletePlantById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
