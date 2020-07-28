package com.galvanize.DSS;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface YellowZikaRepository extends CrudRepository<YellowZika, Long> {

    @Query(value = "select * from yellowzika WHERE zika_virus_disease_non_4 <> '' OR yellow_fever_cum_2020 <> ''", nativeQuery = true)
    <Optional>Iterable<YellowZika> findAll2020YellowZikaLocations();
}
