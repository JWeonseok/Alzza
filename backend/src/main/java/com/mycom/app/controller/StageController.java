package com.mycom.app.controller;

import com.mycom.app.domain.dto.StageDto;
import com.mycom.app.domain.entity.Stage;
import com.mycom.app.service.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/api/stage")
//@RequestMapping("/api/stage")
public class StageController {

    private static final int SUCCESS = 1;

    @Autowired
    StageService stageService;

    @GetMapping()
    public ResponseEntity<StageDto> stageInfo(@RequestParam String userId, @RequestParam String gameCode) {
        int game = Integer.parseInt(gameCode);

        try {
            StageDto stageDto = stageService.getStageInfoByUserIdAndGameCode(userId, game);
            if (stageDto == null) {
                stageService.insertStageInfo(userId, gameCode);
                stageDto = stageService.getStageInfoByUserIdAndGameCode(userId, game);
                return new ResponseEntity<>(stageDto, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(stageDto, HttpStatus.OK);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/stageList")
    public ResponseEntity<List<Stage>> clearStageList(@RequestParam String userId){
        try {
            List<Stage> stageList = stageService.getClearStageListByUserId(userId);
            if (stageList == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(stageList, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity updateStageInfo(@RequestBody StageDto stageDto) {
        try {
            int result = stageService.updateStageInfo(stageDto);
            if (result == SUCCESS) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
