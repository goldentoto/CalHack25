package com.calhack.cookproj.repositories;
import com.calhack.cookproj.models.Location;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends CrudRepository<Location, Long>{
    Location findByLocationid(Long id);
    Location findByAddress(String address);
    Location findByName(String name);
}
