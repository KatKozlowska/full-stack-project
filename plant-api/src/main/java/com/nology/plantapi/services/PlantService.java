package com.nology.plantapi.services;

import com.nology.plantapi.entities.PlantEntity;
import com.nology.plantapi.entities.WateringEntity;
import com.nology.plantapi.models.PlantViewObject;
import com.nology.plantapi.repository.PlantRepository;
import com.nology.plantapi.repository.WateringRepository;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlantService {
  @NonNull private PlantRepository plantRepository;
  @NonNull private WateringRepository wateringRepository;

  public PlantViewObject getPlantById(long id) {
    Optional<PlantEntity> plant = plantRepository.findById(id);
    return plant.map(this::toDto).orElse(null);
  }

  public List<PlantViewObject> getAllPlants() {
    return plantRepository
            .findAll()
            .stream()
            .map(this::toDto)
            .toList();
  }

  public List<PlantViewObject> getAllPlants(Optional<LocalDate> nextWater) {

    if (nextWater.isEmpty()) {
      return getAllPlants();
    }
    return getAllPlants().stream().filter(p -> p.getNextWater().isEqual(nextWater.get())).toList();

  }

  public void addPlant(PlantEntity plant) {
    plantRepository.save(plant);
  }

  public void updatePlant(PlantEntity newPlant, long id) {
    if (!plantRepository.existsById(id)) {
      throw new IllegalArgumentException();
    }
    newPlant.setId(id);
    plantRepository.save(newPlant);
  }

  public void deletePlantById(long id) {
    plantRepository.deletePlantById(id);
  }

  public List<WateringEntity> getWateringEntities(long id) {
    return wateringRepository.findByPlantIdOrderByWateredOnDesc(id);
  }

  private PlantViewObject toDto(PlantEntity plant) {
    WateringEntity watering =
        wateringRepository.findFirstByPlantIdOrderByWateredOnDesc(plant.getId()).orElse(null);
    PlantViewObject plantView =
        PlantViewObject.builder()
            .id(plant.getId())
            .name(plant.getName())
            .description(plant.getDescription())
            .wateringFrequency(plant.getWateringFrequency())
            .build();
    if (watering != null) {
      plantView.setLastWatered(watering.getWateredOn());
      plantView.setNextWater(watering.getWateredOn().plusDays(plant.getWateringFrequency()));
    }
    return plantView;
  }

  public List<PlantViewObject> getPlantsToWaterThisWeek() {
    LocalDate today = LocalDate.now();

    return getAllPlants().stream().filter(p -> p.getNextWater().isAfter(today) && p.getNextWater().isBefore(today.plusDays(7))).toList();
  }
}
