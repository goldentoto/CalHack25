package com.calhack.cookproj.repositories;

import com.calhack.cookproj.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUserid(Long id);

    User findByUsername(String username);
}
