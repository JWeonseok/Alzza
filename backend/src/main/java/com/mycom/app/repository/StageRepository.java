package com.mycom.app.repository;

import com.mycom.app.domain.entity.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StageRepository extends JpaRepository<Stage, Integer> {
    Stage findByUserIdAndGameCode(String userId, int gameCode);
    List<Stage> findByUserIdAndCurStage(String userId, int curStage);
    void deleteByUserId(String userId);
}
