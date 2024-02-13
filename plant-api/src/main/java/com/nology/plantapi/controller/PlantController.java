package com.nology.plantapi.controller;

import com.nology.plantapi.entities.WateringEntity;
import com.nology.plantapi.models.PlantViewObject;
import com.nology.plantapi.services.PlantService;
import com.nology.plantapi.entities.PlantEntity;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    public ResponseEntity<List<PlantViewObject>> getPlants() {
        return ResponseEntity.ok(plantService.getAllPlants());
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
