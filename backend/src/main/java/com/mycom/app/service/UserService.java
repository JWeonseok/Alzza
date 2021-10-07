package com.mycom.app.service;


import com.mycom.app.domain.dto.user.UserDto;

public interface UserService {

    boolean checkUserId(String userId);
    int join(UserDto userDto);
    UserDto userDetail(String userId);
    int updateUserInfo(UserDto userDto);
    int updateUserPassword(UserDto userDto);
    int deleteUser(String userId);
}
