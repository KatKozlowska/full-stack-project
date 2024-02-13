package com.nology.plantapi.models;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PlantEditObject {

  private long id;
  private String name;
  private String description;
  private long wateringFrequency;
}
