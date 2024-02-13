package com.nology.plantapi.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "watering")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WateringEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "plant_id")
    private long plantId;

    @Column(name = "watered_on")
    private LocalDate wateredOn;





}
