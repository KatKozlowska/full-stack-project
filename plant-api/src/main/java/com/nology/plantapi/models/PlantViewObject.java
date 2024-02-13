package com.nology.plantapi.models;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@Data
public class PlantViewObject {

    private long id;
    private String name;
    private String description;
    private long wateringFrequency;
    private LocalDate lastWatered;
    private LocalDate nextWater;

}
