package com.galvanize.DSS;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RabiesRepository extends CrudRepository<Rabies, Long> {

    @Query(value = "SELECT * FROM rabies WHERE rabies_animal_cum_2020 <> ''", nativeQuery = true)
    <Optional>Iterable<Rabies> findAll2020RabiesLocations();
}
