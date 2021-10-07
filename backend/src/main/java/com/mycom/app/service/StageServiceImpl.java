package com.mycom.app.service;

import com.mycom.app.domain.dto.StageDto;
import com.mycom.app.domain.entity.Stage;
import com.mycom.app.repository.GameRepository;
import com.mycom.app.repository.StageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class StageServiceImpl implements StageService {

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Autowired
    StageRepository stageRepository;

    @Override
    @Transactional
    public StageDto getStageInfoByUserIdAndGameCode(String userId, int gameCode) {
        Stage stage = stageRepository.findByUserIdAndGameCode(userId, gameCode);
        if (stage == null) return null;
        return new StageDto(stage.getStageId(), stage.getUserId(), stage.getGameCode() + "", stage.getCurStage() + "");
    }

    @Override
    public List<Stage> getClearStageListByUserId(String userId) {
        List<Stage> stageList = stageRepository.findByUserIdAndCurStage(userId, 4);
        if(stageList == null) return null;
        return stageList;
    }

    @Override
    @Transactional
    public int updateStageInfo(StageDto stageDto) {
        try {
            //기존 디비
            StageDto sd = getStageInfoByUserIdAndGameCode(stageDto.getUserId(), Integer.parseInt(stageDto.getGameCode()));
            int sdCurStage = Integer.parseInt(sd.getCurStage());
            int dtoCurStage = Integer.parseInt(stageDto.getCurStage());

            int curStage = sdCurStage > dtoCurStage ? sdCurStage: dtoCurStage;

            Stage stage = new Stage();
            stage.setStageId(sd.getStageId());
            System.out.println(stage.getStageId());
            stage.setUserId(stageDto.getUserId());
            stage.setGameCode(Integer.parseInt(stageDto.getGameCode()));
            stage.setCurStage(curStage);
            stageRepository.save(stage);
            return SUCCESS;

        } catch (Exception e) {
            e.printStackTrace();
            return FAIL;
        }
    }

    @Override
    @Transactional
    public int insertStageInfo(String userId, String gameCode) {
        try {
            Stage stage = new Stage();
            stage.setUserId(userId);
            stage.setGameCode(Integer.parseInt(gameCode));
            stage.setCurStage(1);
            stageRepository.save(stage);
            return SUCCESS;

        } catch (Exception e) {
            e.printStackTrace();
            return FAIL;
        }
    }

}
