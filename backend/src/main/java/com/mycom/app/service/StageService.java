package com.mycom.app.service;


import com.mycom.app.domain.dto.StageDto;
import com.mycom.app.domain.entity.Stage;

import java.util.List;

public interface StageService {
    StageDto getStageInfoByUserIdAndGameCode(String userId, int gameCode);
    List<Stage> getClearStageListByUserId(String userId);
    int updateStageInfo(StageDto stageDto);
    int insertStageInfo(String userId, String gameCode);
}
