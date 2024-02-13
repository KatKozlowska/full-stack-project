package com.nology.plantapi.repository;

import com.nology.plantapi.entities.PlantEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantRepository extends JpaRepository<PlantEntity, Long> {

    void deletePlantById(long id);

}
