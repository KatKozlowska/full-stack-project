package com.nology.plantapi.repository;

import com.nology.plantapi.entities.PlantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<PlantEntity, Long> {

}
