package com.galvanize.DSS;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CovidRepository extends CrudRepository<Covid, Long> {

    @Query(value = "SELECT * FROM Covid WHERE submission_date = ?1", nativeQuery = true)
    <Optional>Covid findBySubDate(String submission_date);
}
