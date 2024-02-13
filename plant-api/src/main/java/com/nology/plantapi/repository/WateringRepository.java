package com.nology.plantapi.repository;

import com.nology.plantapi.entities.WateringEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WateringRepository extends JpaRepository<WateringEntity, Long> {

    public List<WateringEntity> findByPlantIdOrderByWateredOnDesc(long plantId);

    public Optional<WateringEntity> findFirstByPlantIdOrderByWateredOnDesc(long plantId);

}
