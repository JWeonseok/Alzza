package com.mycom.app.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StageDto {
    private long stageId;
    private String userId;
    private String gameCode;
    private String curStage;

}
