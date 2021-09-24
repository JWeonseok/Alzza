package com.mycom.app.repository;

import com.mycom.app.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByUserId(String userId);
    User findByUserId(String userId);
    void deleteByUserId(String userId);
}
